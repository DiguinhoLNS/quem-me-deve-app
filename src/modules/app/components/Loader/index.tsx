import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'

const AppLoader: React.FC = () => {

    const theme = useTheme()

    return(

        <Render
            statusBarOptions = {{
                barStyle: 'light-content',
                backgroundColor: theme.colors.primary,
            }}
            wrapperColor = {theme.colors.primary}
            align = "center"
        >
            <ActivityIndicator color = "#fff" size = "large" />
        </Render>

    )

}

export default AppLoader