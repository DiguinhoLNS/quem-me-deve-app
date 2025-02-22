import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import { useAppSelector } from '@redux/hooks'
import Home from '../screens/Home'

const HomeRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)

    const [index, setIndex] = useState(0)

    const [routes] = useState([
        { key: 'homeIndex', title: 'Home', focusedIcon: 'home-variant', unfocusedIcon: 'home-variant-outline' },
        { key: 'homeIndex2', title: 'Home', focusedIcon: 'home-variant', unfocusedIcon: 'home-variant-outline' },
    ])

    const renderScene = BottomNavigation.SceneMap({
        homeIndex: Home,
        homeIndex2: Home,
    })

    return(

        <BottomNavigation
            navigationState = {{ index, routes }}
            onIndexChange = {setIndex}
            renderScene = {renderScene}
            sceneAnimationEnabled = {true}
            sceneAnimationType = "shifting"
            style = {{ backgroundColor: screen.backgroundColor }}
        />

    )

}

export default HomeRoutes