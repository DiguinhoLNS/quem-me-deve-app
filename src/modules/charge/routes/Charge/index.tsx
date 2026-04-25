import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import ChargeList from '@modules/charge/screens/ChargeList'
import ChargeDetails from '@modules/charge/screens/ChargeDetails'
import ChargeDetailsEditDebtor from '@modules/charge/screens/ChargeDetailsEditDebtor'
import { useAppSelector } from '@redux/hooks'
import { ChargeRouteParams } from './types'

const ChargeRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const { Navigator, Screen } = createStackNavigator<ChargeRouteParams>()

    return(

        <Navigator
            initialRouteName = "chargeList"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                header: props => <ScreenHeader {...props} elevated = {false} />
            }}
        >
            <Screen
                name = "chargeList"
                component = {ChargeList}
                options = {{
                    title: 'Cobranças',
                }}
            />
            <Screen
                name = "chargeDetails"
                component = {ChargeDetails}
                options = {{
                    title: 'Detalhes',
                }}
            />
            <Screen
                name = "chargeDetailsEditDebtor"
                component = {ChargeDetailsEditDebtor}
                options = {{
                    title: 'Contato',
                }}
            />
        </Navigator>

    )

}

export default ChargeRoutes