import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import { useAppSelector } from '@redux/hooks'
import AuthLogin from '../screens/AuthLogin'
import { AuthRouteParams } from './types'

const AuthRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<AuthRouteParams>()

    return(

        <Navigator
            initialRouteName = "authLogin"
            screenOptions = {{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                cardStyle: { backgroundColor: screen.backgroundColor },
                header: ScreenHeader
            }}
        >
            <Screen
                name = "authLogin"
                component = {AuthLogin}
                options = {{
                    title: 'Login'
                }}
            />
        </Navigator>

    )

}

export default AuthRoutes