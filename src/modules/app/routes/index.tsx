import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import HomeRoutes from '@modules/home/routes'
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
                header: props => <ScreenHeader {...props} elevated = {false} />,
                headerShown: false
            }}
        >
            <Screen
                name = "homeRoutes"
                component = {HomeRoutes}
                options = {{
                    title: 'Quem me Deve',
                }}
            />

            <Screen
                name = "createChargeRoutes"
                component = {CreateChargeRoutes}
                options = {{
                    headerShown: false
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