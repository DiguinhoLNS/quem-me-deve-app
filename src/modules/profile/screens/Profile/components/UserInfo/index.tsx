import React from 'react'
import { Text } from 'react-native-paper'
import Divider from '@components/Screen/Divider'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const UserInfo: React.FC = () => {

    const { userData } = useAppSelector(s => s.auth)

    const theme = useTheme()

    return(

        <>
            <Container
                style = {{ backgroundColor: theme.colors.primary }}
                padding = {false}
            >
                <Container
                    marginTop = {marginDefault}
                    marginBottom = {marginDefault}
                    padding = {false}
                >
                    <Container center>
                        <Text variant = "titleLarge" style = {{color: theme.colors.onPrimary}}>Olá</Text>
                        <Text variant = "displayLarge" style = {{color: theme.colors.onPrimary}}>{userData!.name ?? userData!.login}</Text>
                    </Container>
                </Container>
            </Container>

            <Divider />
        </>

    )

}

export default UserInfo