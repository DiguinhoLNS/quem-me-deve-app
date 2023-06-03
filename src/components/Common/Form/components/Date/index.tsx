import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import Container from '@components/Layout/Container'
import themes from '@styles/themes'
import FormLabel from '../Label'
import { formDateStyles } from './styles'
import { FormDateProps } from './types'
import * as S from './styles'
import { formatDate } from '@utils/format'

const FormDate: React.FC <FormDateProps> = ({
    label = 'Selecione uma data',
    mode,
    field,
    minimunDate,
    disabled = false,
    error,
    value,
    dtFim,
    setFieldValue
}) => {

    const [openModal, setOpenModal] = useState(false)

    return (

        <>
            <FormLabel label={label} error={!!error} />
            <Container marginTop={4} padding={false}>
                <S.DateTouchable
                    //@ts-ignore
                    active = {openModal}
                    error = {!!error}
                    disabled = {disabled}
                    onPress = {() => setOpenModal(true)}
                >
                    <Text style = {[formDateStyles.label, { color: !!error ? themes.status.error.primary : themes.typography.text.normal }]}>
                        {formatDate(value)}
                    </Text>
                    <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#6A7178" />
                </S.DateTouchable>
            </Container>
            <DatePicker
                modal
                open = {openModal}
                mode = {mode}
                date = {value}
                title = {label}
                textColor = "#6A7178"
                theme = "light"
                is24hourSource = "locale"
                androidVariant = 'iosClone'
                minimumDate = {minimunDate}
                confirmText = "Selecionar"
                cancelText = "Cancelar"
                onConfirm = {date => {
                    setFieldValue(field, new Date(date))

                    if (dtFim && new Date(date).getTime() >= dtFim.getTime()) {
                        date.setHours(date.getHours() + 2)
                        setFieldValue('dtFim', new Date(date))
                    }

                    setOpenModal(false)
                }}
                onCancel={() => {
                    setOpenModal(false)
                }}
            />
        </>

    )

}

export default FormDate