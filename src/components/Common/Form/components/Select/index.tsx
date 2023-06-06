import React, { useState } from 'react'
import { Keyboard, ScrollView } from 'react-native'
import { Dialog, List, Portal, Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Container from '@components/Layout/Container'
import { useAppSelector } from '@redux/hooks'
import FormLabel from '../Label'
import { FormSelectProps } from './types'
import * as S from './styles'

const FormSelect = <T extends unknown, P>({
    label = 'Selecione',
    data,
    placeholder,
    field,
    value,
    error,
    onChange,
    setFieldValue
}: FormSelectProps<T, P>) => {

    const { theme } = useAppSelector(s => s.theme)

    const [openSelect, setOpenSelect] = useState<boolean>(false)

    const labelPlaceholder = placeholder ?? label ?? 'Selecionar'
    const haveValue = !!data.find(item => item.value === value as unknown as P)
    const { formSelectStyles } = S

    return(

        <>
            {!!label && <FormLabel label = {label} error = {!!error} style = {{marginBottom: 4}} />}
            <Container padding = {false}>
                <S.SelectTouchable
                    active = {openSelect} 
                    error = {!!error}
                    onPress = {() => {
                        Keyboard.dismiss()
                        setOpenSelect(true)
                    }}
                >
                    <Text
                        style = {[formSelectStyles.label, {
                            color: !!error ? theme.status.error.primary : haveValue ? theme.typography.text.dark : theme.typography.text.normal
                        }]}
                        numberOfLines = {1}
                        ellipsizeMode = 'tail'
                    >{data.find(item => item.value === value as unknown as P)?.label ?? labelPlaceholder}</Text>
                    <MaterialCommunityIcons name = {`chevron-${openSelect ? 'up' : 'down'}`} size = {24} color = {theme.typography.text.normal} />
                </S.SelectTouchable>
            </Container>
            <Portal>
                <Dialog
                    style = {formSelectStyles.dialog}
                    visible = {openSelect}
                    onDismiss = {() => setOpenSelect(false)}
                >
                    <Dialog.Title style = {{color: theme.typography.text.normal, fontWeight: '700', fontSize: 20}}>{labelPlaceholder}</Dialog.Title>
                    <Dialog.ScrollArea style = {formSelectStyles.dialogScrollArea}>
                        <ScrollView contentContainerStyle = {formSelectStyles.dialogScrollView}>
                            {data.map((item, index) => (
                                <List.Item
                                    key = {index}
                                    title = {item.label}
                                    titleNumberOfLines = {2}
                                    onPress = {() => {
                                        if(onChange) onChange(item.value as any)
                                        if(setFieldValue && !!field) setFieldValue(field, item.value as any)
                                        setOpenSelect(false)
                                    }}
                                />
                            ))}
                        </ScrollView>
                    </Dialog.ScrollArea>
                </Dialog>
            </Portal>
        </>

    )

}

export default FormSelect