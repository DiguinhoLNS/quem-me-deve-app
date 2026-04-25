import React from 'react'
import FlashMessage from "react-native-flash-message"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as ReduxProvider } from "react-redux"
import { NavigationContainer as NavigationProvider } from '@react-navigation/native'
import AppSafeArea from '@components/Screen/SafeArea'
import { ThemeProvider } from '@modules/theme/contexts/ThemeContext'
import store from '@redux/store'
import { AppProviderProps } from './types'

const AppProvider: React.FC <AppProviderProps> = ({ children }) => {

    return(

        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationProvider>
                    <ReduxProvider store = {store}>
                        <GestureHandlerRootView style = {{ flex: 1 }}>
                            <AppSafeArea>
                                {children}
                            </AppSafeArea>
                        </GestureHandlerRootView>

                        <FlashMessage position = "top" />
                    </ReduxProvider>
                </NavigationProvider>
            </ThemeProvider>
        </SafeAreaProvider> 

    )

}

export default AppProvider