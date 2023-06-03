import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import { AuthRouteParams } from './types'

const AuthRoutes: React.FC = () => {

    const { Navigator, Screen } = createStackNavigator<AuthRouteParams>()

    return(

        <Navigator
            initialRouteName = "authLogin"
            screenOptions = {{
                headerShown: false,
            }}
        >
            <Screen
                name = "authLogin"
                component = {Login}
            />
        </Navigator>

    )

}

export default AuthRoutes