import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Divider from '@components/Screen/Divider'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import AppVersion from '@components/Feedback/AppVersion'
import { useTheme } from '@hooks/useTheme'
import { AppRouteParams } from '@modules/app/routes/types'
import { marginDefault } from '@styles/layout'
import HomeUserInfo from './components/UserInfo'

const Home: React.FC <StackScreenProps<AppRouteParams, 'homeIndex'>> = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                align = "space-between"
            >
                <Container marginBottom = {marginDefault * 2} padding = {false}>
                    <Divider />
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