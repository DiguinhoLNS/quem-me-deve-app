import React from 'react'
import { Formik } from 'formik'
import Button from '@components/Common/Button'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import FormInput from '@components/Common/Form/components/Input'
import submitLogin from '@modules/auth/scripts/request/submitLogin'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { formLoginValues, formLoginSchema } from './config'

const FormLogin: React.FC = () => {

    const dispatch = useAppDispatch()
    const { requestSubmitLogin } = useAppSelector(s => s.requestAuth)

    return(

        <>
            <Formik
                initialValues = {formLoginValues}
                validationSchema = {formLoginSchema}
                onSubmit = {v => submitLogin(dispatch, v)}
            >
                {({ values, errors, setFieldValue, handleSubmit }) => (
                    <>
                        <Container padding = {false} marginBottom = {24}>
                            <Section marginBottom = {16}>
                                <FormInput
                                    label = "Login"
                                    field = "login"
                                    value = {values.login}
                                    error = {!!errors.login}
                                    onChange = {setFieldValue}
                                />
                            </Section>
                            <Section>
                                <FormInput
                                    label = "Senha"
                                    field = "senha"
                                    secure = {true}
                                    value = {values.senha}
                                    error = {!!errors.senha}
                                    onChange = {setFieldValue}
                                />
                            </Section>
                        </Container>
                        <Section>
                            <Button
                                label = "Entrar"
                                loading = {requestSubmitLogin.loading}
                                disabled = {requestSubmitLogin.loading}
                                onPress = {handleSubmit}
                            />
                        </Section>
                    </>
                )}
            </Formik>
        </>

    )

}

export default FormLogin