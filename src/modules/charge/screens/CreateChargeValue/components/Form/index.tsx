import React, { useState } from 'react'
import { Formik } from 'formik'
import { IconButton, Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { FakeCurrencyInput } from 'react-native-currency-input'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { setCurrentCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { contentWidth, marginDefault } from '@styles/layout'
import { formatCurrency } from '@utils/format'
import { formCreateChargeValueSchema, formCreateChargeValueValues } from './config'

const Form: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeValue'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { currentCreateCharge } = useAppSelector(s => s.createCharge)

    const [focus, setFocus] = useState(false)  

    const theme = useTheme()

    return(

        <>
            <Formik
                initialValues = {{
                    amount: currentCreateCharge.amount || formCreateChargeValueValues.amount,
                }}
                validationSchema = {formCreateChargeValueSchema}
                onSubmit = {v => {
                    dispatch(setCurrentCreateCharge({
                        amount: v.amount,
                        formattedAmount: formatCurrency(v.amount),
                    }))

                    navigation.navigate('createChargeDebtor')
                }}
            >
                {({ values, setFieldValue, handleSubmit }) => (
                    <>
                        <Container marginTop = {marginDefault} padding = {false}>
                            <Section marginBottom = {marginDefault}>
                                <Text style = {{fontSize: 40}}>Qual o valor da <Text style = {{fontWeight: '700'}}>Cobrança?</Text></Text>
                            </Section>

                            <Section>    
                                <FakeCurrencyInput
                                    value = {values.amount ?? 0}
                                    minValue = {0}
                                    maxValue = {999999}
                                    onFocus = {() => setFocus(true)}
                                    onBlur = {() => setFocus(false)}
                                    onChangeValue = {v => setFieldValue('amount', v ?? 0)}
                                    caretColor = {theme.colors.primary}
                                    prefix = 'R$ '
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
                                size = {32}
                                disabled = {values.amount === 0}
                                iconColor = {theme.colors.onSuccess}
                                containerColor = {theme.colors.success}
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