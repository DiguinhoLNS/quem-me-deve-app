import React from 'react'
import { Button } from 'react-native-paper'
import { Formik } from 'formik'
import { StackScreenProps } from '@react-navigation/stack'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import FormInput from '@components/Common/Form/Input'
import { useTheme } from '@hooks/useTheme'
import { localUser } from '@modules/auth/controllers/authController'
import { ProfileRouteParams } from '@modules/profile/routes/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import { checkFormValuesChanges } from '@utils/form'
import { formProfileSchema } from './config'

const Form: React.FC <StackScreenProps<ProfileRouteParams, 'profileEdit'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { userData } = useAppSelector(s => s.auth)

    const theme = useTheme()

    return(

        <>
            <Formik
                initialValues = {{
                    name: userData!.name ?? '',
                    pixKey: userData!.pixKey ?? '',
                }}
                validationSchema = {formProfileSchema}
                onSubmit = {values => {
                    localUser.set(dispatch, {
                        ...userData!,
                        name: values.name,
                        pixKey: values.pixKey,
                    })

                    navigation.goBack()
                }}
            >
                {({ values, initialValues, errors, setFieldValue, handleSubmit }) => (
                    <>
                        <Container padding = {false} marginTop = {marginDefault} marginBottom = {24}>
                            <Section marginBottom = {16}>
                                <FormInput
                                    label = "Nome"
                                    value = {values.name}
                                    error = {!!errors.name}
                                    onChangeText = {v => setFieldValue('name', v)}
                                />
                            </Section>
                            <Section>
                                <FormInput
                                    label = "Chave PIX"
                                    value = {values.pixKey}
                                    error = {!!errors.pixKey}
                                    lines = {2}
                                    onChangeText = {v => setFieldValue('pixKey', v)}
                                />
                            </Section>
                        </Container>  

                        <Section>
                            <Button
                                mode = "contained"
                                icon = "pencil"
                                disabled = {!checkFormValuesChanges(values, initialValues)}
                                buttonColor = {theme.colors.success}
                                textColor = {theme.colors.onSuccess}
                                onPress = {() => handleSubmit()}
                            >Salvar</Button>
                        </Section>
                    </>
                )}
            </Formik>
        </>

    )

}

export default Form