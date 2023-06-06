import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Button from '@components/Common/Button'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import localUser from '@modules/auth/scripts/local/user'
import { toggleTheme } from '@modules/theme/reducers/themeReducer'
import { AppRouteParams } from '@modules/app/routes/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import createScreen from '@modules/app/utils/createScreen'

const Home: React.FC <StackScreenProps<AppRouteParams, 'home'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { theme } = useAppSelector(s => s.theme)

    useEffect(() => {
        createScreen(dispatch, { 
            statusBarColor: theme!.colors.primary,
        })
    }, [dispatch])

    return(

        <>
            <Render align = "space-between">
                <Container padding = {false}>
                    <Section marginBottom = {48}>
                        <Typography.Title>{`Bem vindo`}</Typography.Title>
                    </Section>
                    <Section>
                        <Button
                            label = "Trocar tema"
                            marginBottom = {16}
                            onPress = {() => {
                                dispatch(toggleTheme())
                            }}
                        />
                    </Section>
                </Container>
                <Section>
                    <Button
                        icon = "logout"
                        label = "Encerrar sessão"
                        color = {theme!.status.error.primary}
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