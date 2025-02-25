import React, { useState } from 'react'
import { FakeCurrencyInput } from 'react-native-currency-input'
import Container from '@components/Layout/Container'
import BottomSheet from '@components/Common/BottomSheet'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { useTheme } from '@hooks/useTheme'
import { contentWidth } from '@styles/layout'
import { ChargeEditBottomSheetProps } from './types'
import { Button } from 'react-native-paper'
import { handleUpdate } from '@modules/charge/controllers/chargeController'

const ChargeEditBottomSheet: React.FC <ChargeEditBottomSheetProps> = ({ bottomSheetRef }) => {

    const dispatch = useAppDispatch()
    const { currentCharge } = useAppSelector(s => s.charge)

    const [newValue, setNewValue] = useState<number>(currentCharge!.amount)
    const [focus, setFocus] = useState(false)
    
    const theme = useTheme()

    return(

        <BottomSheet
            sheetRef = {bottomSheetRef}
            title = "Editar cobrança"
            height = {300}
        >
            <Container
                padding = {false}
                style = {{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Container>    
                    <FakeCurrencyInput
                        value = {newValue ?? 0}
                        minValue = {0}
                        maxValue = {999999}
                        onFocus = {() => setFocus(true)}
                        onBlur = {() => setFocus(false)}
                        onChangeValue = {v => setNewValue(v ?? 0)}
                        caretColor = {theme.colors.primary}
                        cursorColor = {theme.colors.primary}
                        placeholderTextColor = {theme.colors.onSurface}
                        prefix = 'R$ '
                        precision = {2}
                        style = {{
                            width: contentWidth,
                            borderBottomWidth: 2,
                            borderBottomColor: focus ? theme.colors.primary : theme.colors.outline,
                            color: theme.colors.onSurface,
                            fontSize: 40,
                        }}
                    />
                </Container>

                <Container>
                    <Button
                        icon = "pencil"
                        mode = "contained"
                        disabled = {newValue === currentCharge!.amount}
                        buttonColor = {theme.colors.success}
                        textColor = {theme.colors.onSuccess}
                        onPress = {() => {
                            const newCharge = { ...currentCharge!, amount: newValue }

                            handleUpdate(dispatch, newCharge)
                        }}
                    >Editar</Button>
                </Container>
            </Container>
        </BottomSheet>

    )

}

export default ChargeEditBottomSheet