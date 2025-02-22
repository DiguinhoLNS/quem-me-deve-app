import React from 'react'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { marginDefault } from '@styles/layout'
import HomeUserInfo from './components/UserInfo'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Home: React.FC= () => {

    const theme = useTheme()

    const navigation = useNavigation<any>()

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