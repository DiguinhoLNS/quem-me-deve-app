import React from 'react'
import { Avatar, Text } from 'react-native-paper'
import Divider from '@components/Screen/Divider'
import Section from '@components/Layout/Section'
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
                    <Container type = "row" gap = {12}>
                        <Avatar.Text
                            size = {48}
                            label = {userData!.login[0]}
                            color = {theme.colors.onPrimaryContainer}
                            style = {{backgroundColor: theme.colors.primaryContainer}}
                        />

                        <Text variant = "titleLarge" style = {{color: theme.colors.onPrimary}}>{userData!.login}</Text>
                    </Container>
                </Container>
            </Container>

            <Divider />
        </>

    )

}

export default UserInfo