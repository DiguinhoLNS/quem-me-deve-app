import React from 'react'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { marginDefault } from '@styles/layout'
import HomeUserInfo from './components/UserInfo'

const Home: React.FC= () => {

    const theme = useTheme()

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
                </Container>

                <Container>
                    
                </Container>
            </Render>
        </>

    )

}

export default Home