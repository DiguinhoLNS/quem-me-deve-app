module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
        ["@babel/plugin-proposal-decorators", {
            "legacy": true
        }],
        ["module:react-native-dotenv", {
            "moduleName": "react-native-dotenv"
        }],
        ["module-resolver", {
            root: ["./src"],
            extensions: [
                '.ts',
                '.tsx',
                '.jsx',
                '.js',
                '.json',
            ],
            alias: {
                '@assets': './src/assets',
                '@components': './src/components',
                '@config': './src/config',
                '@constants': './src/constants',
                '@hooks': './src/hooks',
                '@interfaces': './src/interfaces',
                '@mock': './src/mock',
                '@modules': './src/modules',
                '@redux': './src/redux',
                '@routes': './src/routes',
                '@styles': './src/styles',
                '@utils': './src/utils',
            }
        }],
        ["react-native-reanimated/plugin"]
    ]
};
