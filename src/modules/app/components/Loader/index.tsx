import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Render from '@components/Screen/Render'
import themes from '@styles/themes'

const AppLoader: React.FC = () => {

    return(

        <Render
            statusBarOptions = {{backgroundColor: themes.colors.tertiary, barStyle: 'light-content'}}
            wrapperColor = {themes.colors.tertiary}
            align = "center"
        >
            <ActivityIndicator color = "#fff" size = "large" />
        </Render>

    )

}

export default AppLoader