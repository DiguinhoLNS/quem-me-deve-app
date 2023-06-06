import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Render from '@components/Screen/Render'
import { useAppSelector } from '@redux/hooks'

const AppLoader: React.FC = () => {

    const { theme } = useAppSelector(s => s.theme)

    return(

        <Render
            statusBarOptions = {{backgroundColor: theme.colors.tertiary, barStyle: 'light-content'}}
            wrapperColor = {theme.colors.tertiary}
            align = "center"
        >
            <ActivityIndicator color = "#fff" size = "large" />
        </Render>

    )

}

export default AppLoader