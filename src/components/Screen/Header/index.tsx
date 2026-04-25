import React from 'react'
import { Appbar } from 'react-native-paper'
import { useTheme } from '@hooks/useTheme'
import HeaderMenu from '../Menu'
import { ScreenHeaderProps } from './types'

const ScreenHeader: React.FC <ScreenHeaderProps> = ({ elevated = true, ...props }) => {

    const theme = useTheme()

    return(

        <Appbar.Header
            mode = "center-aligned"
            elevated = {elevated}
            statusBarHeight = {0}
            style = {{ backgroundColor: theme.colors.primary }}
        >
            {!!props.back && <Appbar.BackAction color = {theme.colors.onPrimary} onPress = {props.navigation.goBack} />}
            
            <Appbar.Content title = {props.options.title} color = {theme.colors.onPrimary} />

            <HeaderMenu />
        </Appbar.Header>

    )

}

export default ScreenHeader