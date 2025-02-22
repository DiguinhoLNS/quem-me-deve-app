import React, { useState } from 'react'
import { Formik } from 'formik'
import { IconButton, Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { FakeCurrencyInput } from 'react-native-currency-input'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { setCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { useAppDispatch } from '@redux/hooks'
import { contentWidth, marginDefault } from '@styles/layout'
import { formCreateChargeValueSchema, formCreateChargeValueValues } from './config'

const Form: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeValue'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()

    const [focus, setFocus] = useState(false)  

    const theme = useTheme()

    return(

        <>
            <Formik
                initialValues = {formCreateChargeValueValues}
                validationSchema = {formCreateChargeValueSchema}
                onSubmit = {v => {
                    dispatch(setCreateCharge(v))

                    navigation.navigate('createChargeDebtor')
                }}
            >
                {({ values, setFieldValue, handleSubmit }) => (
                    <>
                        <Container marginTop = {marginDefault} padding = {false}>
                            <Section marginBottom = {marginDefault}>
                                <Text style = {{fontSize: 40}}>Qual o valor da <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                            </Section>

                            <Section>    
                                <FakeCurrencyInput
                                    value = {values.amount ?? 0}
                                    minValue = {0}
                                    onFocus = {() => setFocus(true)}
                                    onBlur = {() => setFocus(false)}
                                    onChangeValue = {v => setFieldValue('amount', v ?? 0)}
                                    caretColor = {theme.colors.primary}
                                    prefix = 'R$'
                                    precision = {2}
                                    style = {{
                                        width: contentWidth,
                                        borderBottomWidth: 2,
                                        borderBottomColor: focus ? theme.colors.primary : theme.colors.outline,
                                        fontSize: 40,
                                    }}
                                />
                            </Section>
                        </Container>

                        <Section type = "row" between>
                            <IconButton
                                icon = 'close'
                                size = {32}
                                iconColor = {theme.colors.error}
                                onPress = {() => {
                                    navigation.goBack()
                                }}
                            />
                            <IconButton
                                mode = "contained"
                                icon = 'arrow-right'
                                iconColor = {theme.colors.success}
                                containerColor = {theme.colors.successContainer}
                                disabled = {values.amount === 0}
                                size = {32}
                                onPress = {() => handleSubmit()}
                            />
                        </Section>
                    </>
                )}
            </Formik>
        </>

    )

}

export default Form