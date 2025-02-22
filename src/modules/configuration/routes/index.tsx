import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import { useAppSelector } from '@redux/hooks'
import ConfigurationList from '../screens/ConfigurationList'
import ConfigurationTheme from '../screens/ConfigurationTheme'
import { ConfigurationRouteParams } from './types'

const ConfigurationRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<ConfigurationRouteParams>()

    return(

        <Navigator
            initialRouteName = "configurationList"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                header: props => <ScreenHeader {...props} elevated = {props.route.name !== 'configurationList'} />,
            }}
        >
            <Screen
                name = "configurationList"
                options = {{
                    title: 'Configurações',
                }}
                component = {ConfigurationList}
            />

            <Screen
                name = "configurationTheme"
                options = {{
                    title: 'Tema',
                }}
                component = {ConfigurationTheme}
            />
        </Navigator>

    )

}

export default ConfigurationRoutes