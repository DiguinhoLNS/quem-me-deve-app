import React from 'react'
import FlashMessage from "react-native-flash-message"
import { Provider as ReduxProvider } from "react-redux"
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer as NavigationProvider } from '@react-navigation/native'
import theme from '@constants/paper/theme'
import store from '@redux/store'
import Routes from './routes'

const App: React.FC = () => {

    return (
        <NavigationProvider>
            <ReduxProvider store = {store}>
                <PaperProvider theme = {theme}>
                    <Routes />
                    <FlashMessage position = "top" />
                </PaperProvider>
            </ReduxProvider>
        </NavigationProvider>
    )

}

export default App