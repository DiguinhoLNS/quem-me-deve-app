import React from 'react'
import FlashMessage from "react-native-flash-message"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as ReduxProvider } from "react-redux"
import { NavigationContainer as NavigationProvider } from '@react-navigation/native'
import { ThemeProvider } from '@modules/theme/contexts/ThemeContext'
import store from '@redux/store'
import { AppProviderProps } from './types'

const AppProvider: React.FC <AppProviderProps> = ({ children }) => {

    return(

        
            <SafeAreaProvider>
                <NavigationProvider>
                    <ReduxProvider store = {store}>
                        <ThemeProvider>
                            <GestureHandlerRootView style = {{ flex: 1 }}>
                                {children}
                            </GestureHandlerRootView>
                        </ThemeProvider>

                        <FlashMessage position = "top" />
                    </ReduxProvider>
                </NavigationProvider>
            </SafeAreaProvider>
        

    )

}

export default AppProvider