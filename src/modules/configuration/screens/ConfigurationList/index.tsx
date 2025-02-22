import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Divider, List, Text } from 'react-native-paper'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import ScreenDivider from '@components/Screen/Divider'
import DialogMessage from '@components/Common/DialogMessage'
import { useTheme } from '@hooks/useTheme'
import { getAppVersion } from '@modules/app/controllers/appController'
import { cleanAll, logout } from '@modules/auth/controllers/authController'
import { ConfigurationRouteParams } from '@modules/configuration/routes/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter'

const ConfigurationList: React.FC <StackScreenProps<ConfigurationRouteParams, 'configurationList'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { userData } = useAppSelector(s => s.auth)

    const [openModalDeleteAllData, setOpenModalDeleteAllData] = useState<boolean>(false)

    const theme = useTheme()

    const appVersion = getAppVersion()

    const SHOW_USER_DATA = !!userData

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                align = "space-between"
            >
                <Container marginBottom = {32} padding = {false}>
                    <ScreenDivider />
                    <Section marginBottom = {24} center>
                        <Text variant = "titleLarge">Olá</Text>
                        <Text variant = "headlineMedium">{capitalizeFirstLetter(userData?.login.split(' ')[0] ?? 'Usuário')}</Text>
                    </Section>

                    <Section padding = {false}>
                        <Divider />

                        <List.Item
                            title = "Tema"
                            description = "Alterar o tema de cores"
                            left = {props => <List.Icon {...props} icon = "palette" />}
                            onPress = {() => {
                                navigation.navigate('configurationTheme')
                            }}
                        />
                    </Section>

                    <Section padding = {false}>
                        <Divider />

                        <List.Item
                            title = "Limpar todos os dados"
                            titleStyle = {{ color: theme.colors.error }}
                            left = {props => <List.Icon {...props} color = {theme.colors.error} icon = "delete-forever" />}
                            onPress = {() => {
                                setOpenModalDeleteAllData(true)
                            }}
                        />
                    </Section>
                     
                    {SHOW_USER_DATA && (
                        <Section padding = {false}>
                            <Divider />

                            <List.Item
                                title = "Sair"
                                description = "Encerrar sessão atual"
                                left = {props => <List.Icon {...props} icon = "logout" />}
                                onPress = {() => {
                                    logout(dispatch, userData, navigation)
                                }}
                            />
                        </Section>
                    )}

                    <Section padding = {false}>
                        <Divider />

                        <List.Item
                            title = "Versão"
                            description = {appVersion.version}
                            left = {props => <List.Icon {...props} icon = "information-outline" />}
                        />
                        <List.Item
                            title = "Build"
                            description = {appVersion.build}
                            left = {props => <List.Icon {...props} icon = "code-tags" />}
                        />
                    </Section>

                    <Divider />
                </Container>

                <Container type = "row" padding = {false} center>
                    <Text>Desenvolvido por <Text style = {{color: theme.colors.primary, fontWeight: 'bold'}}>Rodrigo Lima</Text></Text>
                </Container>
            </Render>

            <DialogMessage
                open = {openModalDeleteAllData}
                setOpen = {setOpenModalDeleteAllData}
                title = "Limpar todos os dados"
                description = "Todos os dados serão apagados, deseja continuar?"
                actions = {{
                    cancel: {
                        label: 'Cancelar',
                        onPress: () => {
                            setOpenModalDeleteAllData(false)
                        }
                    },
                    confirm: {
                        label: 'Limpar',
                        onPress: () => cleanAll(dispatch)
                    }
                }}
            />
        </>

    )

}

export default ConfigurationList