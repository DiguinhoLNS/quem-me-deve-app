import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenHeader from '@components/Screen/Header'
import { useAppSelector } from '@redux/hooks'
import ProfileData from '../screens/ProfileData'
import ProfileEdit from '../screens/ProfileEdit'
import { ProfileRouteParams } from './types'

const ProfileRoutes: React.FC = () => {

    const { screen } = useAppSelector(s => s.app)
    
    const { Navigator, Screen } = createStackNavigator<ProfileRouteParams>()

    return(

        <Navigator
            initialRouteName = "profileData"
            screenOptions = {{
                cardStyle: { backgroundColor: screen.backgroundColor },
                header: ScreenHeader
            }}
        >
            <Screen
                name = "profileData"
                component = {ProfileData}
                options = {{
                    title: 'Dados',
                }}
            />
            <Screen
                name = "profileEdit"
                component = {ProfileEdit}
                options = {{
                    title: 'Perfil',
                }}
            />
        </Navigator>

    )

}

export default ProfileRoutes