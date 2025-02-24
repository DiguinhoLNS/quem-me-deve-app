import React from 'react'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'

const Profile: React.FC = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {true}
            >

            </Render>
        </>

    )

}

export default Profile