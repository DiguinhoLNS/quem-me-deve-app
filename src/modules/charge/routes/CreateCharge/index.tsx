import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateChargeDebtor from '@modules/charge/screens/CreateChargeDebtor'
import CreateChargeResume from '@modules/charge/screens/CreateChargeResume'
import { useAppSelector } from '@redux/hooks'
import CreateChargeValue from '../../screens/CreateChargeValue'
import { CreateChargeRouteParams } from './types'

const CreateChargeRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<CreateChargeRouteParams>()

    return(

        <Navigator
            initialRouteName = "createChargeValue"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                headerShown: false
            }}
        >
            <Screen
                name = "createChargeValue"
                component = {CreateChargeValue}
            />
            <Screen
                name = "createChargeDebtor"
                component = {CreateChargeDebtor}
            />
            <Screen
                name = "createChargeResume"
                component = {CreateChargeResume}
            />
        </Navigator>

    )

}

export default CreateChargeRoutes