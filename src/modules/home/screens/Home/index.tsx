import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { resetCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { useAppDispatch } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import HomeUserInfo from './components/UserInfo'

const Home: React.FC = () => {

    const dispatch = useAppDispatch()

    const theme = useTheme()

    const navigation = useNavigation<any>()
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused){
            dispatch(resetCreateCharge())
        }
    }, [isFocused])

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge
                align = "space-between"
            >
                <Container
                    marginTop = {marginDefault}
                    marginBottom = {marginDefault * 2}
                    padding = {false}
                >
                    <Section>
                        <HomeUserInfo />
                    </Section>

                    <Section>
                        <Button
                            mode = "contained"
                            icon = "cash-plus"
                            buttonColor = {theme.colors.success}
                            textColor = {theme.colors.onSuccess}
                            onPress = {() => navigation.navigate('createChargeRoutes')}
                        >Nova Cobrança</Button>
                    </Section>
                </Container>

                <Container>
                    
                </Container>
            </Render>
        </>

    )

}

export default Home