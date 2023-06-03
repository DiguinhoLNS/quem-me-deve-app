import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '@redux/hooks'

const AppSafeArea: React.FC <PropsWithChildren> = ({ children }) => {

    const { statusBarColor, navigationBarColor } = useAppSelector(state => state.app.screen)

    return(

        <SafeAreaProvider>
            <SafeAreaView style = {{flex: 1, backgroundColor: statusBarColor}} edges = {['top']}>
                {children}
            </SafeAreaView>
            <SafeAreaView style = {{flex: 0, backgroundColor: navigationBarColor}} edges = {['left', 'right', 'bottom']} />
        </SafeAreaProvider>

    )

}

export default AppSafeArea