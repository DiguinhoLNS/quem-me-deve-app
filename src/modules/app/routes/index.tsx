import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeRoutes from '@modules/home/routes'
import ProfileRoutes from '@modules/profile/routes'
import CreateChargeRoutes from '@modules/charge/routes/CreateCharge'
import ConfigurationRoutes from '@modules/configuration/routes'
import { useAppSelector } from '@redux/hooks'
import { AppRouteParams } from './types'

const AppRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<AppRouteParams>()
    
    return (

        <Navigator
            initialRouteName = "homeRoutes"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                headerShown: false
            }}
        >
            <Screen
                name = "homeRoutes"
                component = {HomeRoutes}
            />

            <Screen
                name = "createChargeRoutes"
                component = {CreateChargeRoutes}
            />
            <Screen
                name = "configurationRoutes"
                component = {ConfigurationRoutes}
            />
            <Screen
                name = "profileRoutes"
                component = {ProfileRoutes}
            />
        </Navigator>

    )

}

export default AppRoutes