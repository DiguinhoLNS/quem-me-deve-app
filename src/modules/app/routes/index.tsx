import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Home from '@modules/home/screens/Home'
import { useAppSelector } from '@redux/hooks'
import { AppRouteParams } from './types'

const AppRoutes: React.FC = () => {

    const { Navigator, Screen } = createStackNavigator<AppRouteParams>()
    const { screen } = useAppSelector(s => s.app)
    
    return (

        <Navigator
            initialRouteName = "home"
            screenOptions = {{
                headerShown: false,
                cardStyle: { backgroundColor: screen.navigatorColor },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Screen
                name = "home"
                component = {Home}
            />
        </Navigator>

    )

}

export default AppRoutes