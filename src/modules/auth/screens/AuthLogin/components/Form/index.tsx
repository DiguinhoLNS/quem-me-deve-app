import React from 'react'
import { Button } from 'react-native-paper'
import { Formik } from 'formik'
import { StackScreenProps } from '@react-navigation/stack'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import FormInput from '@components/Common/Form/Input'
import { useTheme } from '@hooks/useTheme'
import { submitLogin } from '@modules/auth/services/authService'
import { AuthRouteParams } from '@modules/auth/routes/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { formLoginValues, formLoginSchema } from './config'

const FormLogin: React.FC <StackScreenProps<AuthRouteParams, 'authLogin'>> = () => {

    const dispatch = useAppDispatch()
    const { requestSubmitLogin } = useAppSelector(s => s.requestAuth)

    const theme = useTheme()

    return(

        <>
            <Formik
                initialValues = {formLoginValues}
                validationSchema = {formLoginSchema}
                onSubmit = {values => {
                    submitLogin(dispatch, values)
                }}
            >
                {({ values, errors, setFieldValue, handleSubmit }) => (
                    <>
                        <Container padding = {false} marginBottom = {24}>
                            <Section marginBottom = {16}>
                                <FormInput
                                    label = "Login"
                                    value = {values.login}
                                    error = {!!errors.login}
                                    onChangeText = {v => setFieldValue('login', v)}
                                    test-id = "input-login"
                                />
                            </Section>
                            <Section>
                                <FormInput
                                    label = "Senha"
                                    secure
                                    value = {values.password}
                                    error = {!!errors.password}
                                    onChangeText = {v => setFieldValue('password', v)}
                                    test-id = "input-password"
                                />
                            </Section>
                        </Container>
                        <Container>
                            <Button
                                mode = "contained"
                                icon = "login"
                                buttonColor = {theme.colors.success}
                                textColor = {theme.colors.onSuccess}
                                loading = {requestSubmitLogin.loading}
                                onPress = {() => handleSubmit()}
                            >Entrar</Button>
                        </Container>
                    </>
                )}
            </Formik>
        </>

    )

}

export default FormLogin