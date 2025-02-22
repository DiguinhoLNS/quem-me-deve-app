import React from 'react'
import { Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Divider from '@components/Screen/Divider'
import { useTheme } from '@hooks/useTheme'
import { AuthRouteParams } from '@modules/auth/routes/types'
import FormLogin from './components/Form'

const AuthLogin: React.FC <StackScreenProps<AuthRouteParams, 'authLogin'>> = props => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                align = "space-between"
            >
                <Section type = "row" padding = {false} center>
                    <Divider />

                    <Text variant = "headlineMedium">Login</Text>
                </Section>

                <FormLogin {...props} />
            </Render>
        </>

    )

}

export default AuthLogin