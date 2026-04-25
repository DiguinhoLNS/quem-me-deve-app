# Quem Me Deve 💸

Aplicativo móvel em React Native para acompanhar cobranças pessoais, com foco em simplicidade, uso offline e geração de pagamento via Pix.

## 👀 Visão geral

O app permite:

- 💰 Registrar cobranças (valor + devedor).
- 📊 Acompanhar status (paga/pendente) e recorrência.
- 📈 Visualizar resumos financeiros (total, pago, em aberto, maior cobrança e maior devedor).
- 📤 Compartilhar cobranças.
- 🧾 Gerar pagamento Pix (QRCode ou chave) para cada cobrança.
- 💾 Persistir dados localmente para uso sem internet.
- 🎨 Personalizar tema (claro/escuro e paletas de cor).

## 🧱 Stack principal

- React Native 0.76.3
- TypeScript
- Redux Toolkit + React Redux
- React Navigation (stack + bottom tabs)
- React Native Paper (UI)
- Styled Components
- Formik + Yup (formulários e validação)
- react-native-mmkv (persistência local)
- react-native-contacts + react-native-permissions (contatos)

## ✅ Requisitos

- Node.js >= 18
- Yarn 1.x
- Ambiente React Native configurado para Android/iOS:
  https://reactnative.dev/docs/environment-setup
- Para Android:
  Android Studio + SDK (minSdk 24, compileSdk 35)
- Para iOS:
  Xcode + CocoaPods

## ⚙️ Instalação

```bash
yarn
```

### 🍎 Dependências iOS

```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

Se você não usar Bundler, rode `pod install` dentro da pasta `ios`.

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
APP_ENDPOINT=https://api.exemplo.com
APP_DEFAULT_STORAGE_KEY=quem-me-deve
APP_SENTRY_DSN=
```

Observações:

- `APP_ENDPOINT` está preparado para uso no login via API (atualmente a chamada de exemplo está comentada no serviço de auth).
- `APP_DEFAULT_STORAGE_KEY` e `APP_SENTRY_DSN` estão tipados e prontos para evolução.

## ▶️ Como executar

### 1) Inicie o Metro

```bash
yarn start
```

### 2) Rode no Android

```bash
yarn android
```

### 3) Rode no iOS

```bash
yarn ios
```

Observação: o script iOS atual tenta abrir o simulador `iPhone 16 Pro Max`.

## 🧪 Scripts

- 🚇 `yarn start`: inicia o bundler Metro.
- 🤖 `yarn android`: compila e executa no Android.
- 🍏 `yarn ios`: compila e executa no iOS.
- 🧹 `yarn lint`: executa o ESLint.

## 🗂️ Arquitetura do projeto

Estrutura principal de `src`:

```text
src/
  components/      # Componentes compartilhados (layout, screen, feedback, etc.)
  config/          # Configurações globais (logs, versão)
  hooks/           # Hooks de apoio
  modules/
    app/           # Provider, requisições iniciais, estado de tela/rede
    auth/          # Login, usuário local, estado de autenticação
    charge/        # Regras de cobrança, listagem, detalhes e criação
    configuration/ # Configurações do app (tema)
    core/          # Contatos e regras comuns
    home/          # Home e dashboard
    profile/       # Dados e edição de perfil
    theme/         # Contexto, paletas e criação de tema
  redux/           # Store e hooks tipados
  routes/          # Controle de rotas autenticadas/não autenticadas
  utils/           # Helpers (request, response, storage, format, etc.)
```

## 🚀 Fluxo de inicialização

1. O app sobe com providers de tema, navegação, redux, safe area e gesture handler.
2. No boot, são carregados dados locais:
   tema, autenticação e lista de cobranças.
3. A navegação escolhe rotas autenticadas ou de login com base no estado `auth`.
4. Sempre que a lista de cobranças muda, o estado é salvo no storage local (MMKV).
5. O status de conectividade é monitorado para feedback visual de rede.

## 📌 Regras de negócio relevantes

- 🧩 Criação de cobrança em 3 etapas:
  valor -> devedor (contatos) -> confirmação.
- 🆔 Cada cobrança recebe UUID e data de criação.
- 🔄 Cobranças podem ser marcadas como pagas, recorrentes, editadas e removidas.
- 🔍 Tela de detalhes permite compartilhar cobrança e exibir pagamento Pix.
- 🔑 O perfil permite cadastrar chave Pix para habilitar geração de QRCode.

## 🛠️ Troubleshooting rápido

- Erro no iOS por pods:
  rode novamente `cd ios && bundle exec pod install`.
- Erro de cache do Metro:
  reinicie o bundler com `yarn start --reset-cache`.
- Erro em módulo nativo após atualizar deps:
  reinstale pods no iOS e limpe build no Android Studio.