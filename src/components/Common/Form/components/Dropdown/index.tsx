import React, { useState } from 'react'
import { View } from 'react-native'
import { Menu, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import { setNewAccessVeiculo } from '@modules/access/screens/AccessCreate/reducers/accessCreateReducer'
import { setGuestVehicle } from '@modules/guest/reducers/guestReducer'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { typography } from '@styles/themes'
import { FormDropdownProps } from './types'
import FormLabel from '../Label'
import * as S from './styles'

const FormDropdown: React.FC<FormDropdownProps> = ({ label, dropdownWidth, showSelectedIcon, data, placeholder, field, value, setFieldValue, onChange }) => {

    const [openDropdown, setOpenDropdown] = useState(false)

    const { tiposVeiculos, newAccessVeiculo } = useAppSelector(s => s.accessCreate)

    const currentValue = data.find(f => f.value === value)
    const dispatch = useAppDispatch()

    return (

        <>
            <S.DropdowWrapper>
                {!!label && (
                    <Container marginBottom={4} padding={false}>
                        <FormLabel label={label} />
                    </Container>
                )}
                <Menu
                    contentStyle={{ borderRadius: 8, width: dropdownWidth }}
                    statusBarHeight={60}
                    visible={openDropdown}
                    onDismiss={() => setOpenDropdown(false)}
                    anchor={
                        <TouchableRipple
                            style={{ width: '100%', borderRadius: 8 }}
                            borderless={true}
                            onPress={() => setOpenDropdown(true)}
                        >
                            <S.DropdownLabelBox>
                                <Container type="row" padding={false} between>
                                    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        {(!!currentValue && !!currentValue.icon && !!showSelectedIcon) && (
                                            <MaterialCommunityIcons
                                                name={currentValue.icon}
                                                color={typography.text.normal}
                                                size={24}
                                                style={{ marginRight: 8 }}
                                            />
                                        )}
                                        <Typography.Text style={{ fontSize: 16 }}>{currentValue?.label ?? placeholder ?? 'Selecionar'}</Typography.Text>
                                    </View>
                                    <MaterialCommunityIcons name="chevron-down" color="#6A7178" size={24} />
                                </Container>
                            </S.DropdownLabelBox>
                        </TouchableRipple>
                    }
                >
                    {data.map((item, index) => (
                        <Menu.Item
                            key={index}
                            icon={item.icon}
                            title={item.label}
                            titleStyle={{ color: typography.text.normal, fontSize: 16 }}
                            onPress={() => {
                                if (onChange) onChange(item)
                                const tipoVeiculo = tiposVeiculos.find(tipo => tipo.nome === item.label)

                                if (tipoVeiculo && tipoVeiculo.nome === 'Pedestre') {
                                    dispatch(setGuestVehicle({ modelo: "", placa: "", marca: "" }))
                                    dispatch(setNewAccessVeiculo({ modelo: "", placa: "", marca: "" }))
                                }

                                setFieldValue(field, tipoVeiculo ? tipoVeiculo.id : item.value)
                                setOpenDropdown(false)
                            }}
                        />
                    ))}
                </Menu>
            </S.DropdowWrapper>
        </>

    )

}

export default FormDropdown