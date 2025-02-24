import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import { ProfileRouteParams } from '@modules/profile/routes/types'
import UserStatusData from './components/UserStatusData'

const ProfileData: React.FC <StackScreenProps<ProfileRouteParams, 'profileData'>> = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {true}
            >
                <UserStatusData />
            </Render>
        </>

    )

}

export default ProfileData