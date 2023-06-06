import React, { useState } from 'react'
import { Keyboard, ScrollView } from 'react-native'
import { Dialog, List, Portal, Searchbar, Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NoData from '@components/Feedback/NoData'
import Container from '@components/Layout/Container'
import { useAppSelector } from '@redux/hooks'
import FormLabel from '../Label'
import * as S from './styles'
import { FormMutiSelectProps } from './types'

const FormMultiSelect: React.FC <FormMutiSelectProps> = ({
    label = 'Selecione',
    data,
    placeholder,
    field,
    values,
    error,
    onChange,
    setFieldValue
}) => {

    const { theme } = useAppSelector(s => s.theme)
    
    const [openSelect, setOpenSelect] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

    const labelPlaceholder = placeholder ?? label ?? 'Selecionar'
    const haveValue = !!data.find(item => values.includes(item.value))
    const { formSelectStyles } = S

    const filteredValues = !!searchValue ? data.filter(f => f.label.toLowerCase().includes(searchValue.toLowerCase())) ?? [] : data

    return(

        <>
            {!!label && (
                <FormLabel
                    label = {label}
                    error = {!!error}
                    style = {{marginBottom: 4}}
                />
            )}
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
                        numberOfLines = {3}
                        ellipsizeMode = 'tail'
                    >{data.find(item => values.includes(item.value))?.label ?? labelPlaceholder}</Text>
                    <MaterialCommunityIcons
                        name = {`chevron-${openSelect ? 'up' : 'down'}`}
                        size = {24}
                        color = {theme.typography.text.normal}
                    />
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
                        <Container marginTop = {8} padding = {false}>
                            <Searchbar
                                placeholder = "Pesquisar"
                                value = {searchValue}
                                onChangeText = {setSearchValue}
                                onIconPress = {() => setSearchValue('')}
                            />
                        </Container>
                        <ScrollView contentContainerStyle = {formSelectStyles.dialogScrollView}>
                            {filteredValues.length === 0 && (
                                <NoData emoji = "sad" message = {['Nenhum endereço encontrado!']} />
                            )}
                            {filteredValues.slice(0, 10).map((item, index) => (
                                <List.Item
                                    key = {index}
                                    title = {item.label}
                                    titleNumberOfLines = {3}
                                    right = {props => {
                                        if(values.find(f => f === item.value)){
                                            return (
                                                <List.Icon
                                                    {...props}
                                                    icon = "check"
                                                    color = {theme.status.success.primary}
                                                />
                                            )
                                        }
                                    }}
                                    onPress = {() => {
                                        if(onChange) onChange(item.value)
                                        if(setFieldValue && !!field){
                                            if(values.includes(item.value)) {
                                                const newValues = values.filter(value => value !== item.value)
                                                setFieldValue(field, newValues)
                                            }else{
                                                setFieldValue(field, [...values, item.value])
                                            }
                                        }
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

export default FormMultiSelect