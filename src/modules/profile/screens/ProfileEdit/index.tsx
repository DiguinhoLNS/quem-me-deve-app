import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import { ProfileRouteParams } from '@modules/profile/routes/types'

const ProfileEdit: React.FC <StackScreenProps<ProfileRouteParams, 'profileEdit'>> = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
            >
                
            </Render>
        </>

    )

}

export default ProfileEdit