import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import ConfigurationRoutes from '@modules/configuration/routes'
import Home from '@modules/home/screens/Home'
import { useAppSelector } from '@redux/hooks'
import { AppRouteParams } from './types'

const AppRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<AppRouteParams>()
    
    return (

        <Navigator
            initialRouteName = "homeIndex"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                header: ScreenHeader
            }}
        >
            <Screen
                name = "homeIndex"
                component = {Home}
                options = {{
                    title: 'Home',
                }}
            />

            <Screen
                name = "configurationRoutes"
                component = {ConfigurationRoutes}
                options = {{
                    headerShown: false
                }}
            />
        </Navigator>

    )

}

export default AppRoutes