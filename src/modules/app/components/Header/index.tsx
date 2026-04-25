import React from 'react'
import { Appbar } from 'react-native-paper'
import HeaderMenu from '@components/Screen/Menu'
import { useTheme } from '@hooks/useTheme'

const AppHeader: React.FC = () => {

    const theme = useTheme()

    return(

        <Appbar.Header
            mode = "center-aligned"
            elevated = {false}
            statusBarHeight = {0}
            style = {{ backgroundColor: theme.colors.primary }}
        >
            
            <Appbar.Content title = "Quem me Deve" color = {theme.colors.onPrimary} />

            <HeaderMenu />
        </Appbar.Header>

    )

}

export default AppHeader