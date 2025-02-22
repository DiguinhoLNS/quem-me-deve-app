import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppSafeAreaProps } from './types'

const AppSafeArea: React.FC <AppSafeAreaProps> = ({ children, statusBarColor, backgroundColor }) => {

    return(

        <>
            <SafeAreaView style = {{flex: 1, backgroundColor: statusBarColor}} edges = {['top']}>
                {children}
            </SafeAreaView>
            <SafeAreaView style = {{flex: 0, backgroundColor}} edges = {['left', 'right', 'bottom']} />
        </>

    )

}

export default AppSafeArea