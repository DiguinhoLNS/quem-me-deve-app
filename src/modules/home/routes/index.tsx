import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import Profile from '@modules/profile/screens/Profile'
import ChargeRoutes from '@modules/charge/routes/Charge'
import { useAppSelector } from '@redux/hooks'
import Home from '../screens/Home'

const HomeRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)
    const { chargeList } = useAppSelector(s => s.charge)

    const [index, setIndex] = useState(1)

    const [routes] = useState([
        { key: 'chargeRoutes', title: 'Carteira', focusedIcon: 'wallet', unfocusedIcon: 'wallet-outline', badge: chargeList?.filter(f => !f.dtPaid)?.length },
        { key: 'homeIndex', title: 'Home', focusedIcon: 'home-variant', unfocusedIcon: 'home-variant-outline' },
        { key: 'profileIndex', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ])

    const renderScene = BottomNavigation.SceneMap({
        chargeRoutes: ChargeRoutes,
        homeIndex: Home,
        profileIndex: Profile,
    })

    return(

        <BottomNavigation
            navigationState = {{ index, routes }}
            onIndexChange = {setIndex}
            renderScene = {renderScene}
            // sceneAnimationEnabled = {true}
            // sceneAnimationType = "shifting"
            style = {{ backgroundColor: screen.backgroundColor }}
        />

    )

}

export default HomeRoutes