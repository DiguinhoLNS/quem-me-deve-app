import React from 'react'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import UserInfo from './components/UserInfo'
import UserStatus from './components/UserStatus'
import UserOptions from './components/UserOptions'

const Profile: React.FC = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {true}
            >
                <UserInfo />
                <UserStatus />
                <UserOptions />
            </Render>
        </>

    )

}

export default Profile