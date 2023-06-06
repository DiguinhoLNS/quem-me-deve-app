import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Button from '@components/Common/Button'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import localUser from '@modules/auth/scripts/local/user'
import { AppRouteParams } from '@modules/app/routes/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const Home: React.FC <StackScreenProps<AppRouteParams, 'home'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { theme } = useAppSelector(s => s.theme)

    return(

        <>
            <Render align = "space-between">
                <Container padding = {false}>
                    <Section marginBottom = {48}>
                        <Typography.Title>{`Bem vindo`}</Typography.Title>
                    </Section>
                </Container>
                <Section>
                    <Button
                        icon = "logout"
                        label = "Encerrar sessão"
                        color = {theme.status.error.primary}
                        marginBottom = {16}
                        onPress = {() => {
                            localUser.remove(dispatch, navigation)
                        }}
                    />
                </Section>
            </Render>
        </>

    )

}

export default Home