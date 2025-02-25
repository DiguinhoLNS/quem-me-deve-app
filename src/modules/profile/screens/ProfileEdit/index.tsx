import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import { ProfileRouteParams } from '@modules/profile/routes/types'
import Form from './components/Form'

const ProfileEdit: React.FC <StackScreenProps<ProfileRouteParams, 'profileEdit'>> = props => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                align = "space-between"
            >
                <Form {...props} /> 
            </Render>
        </>

    )

}

export default ProfileEdit