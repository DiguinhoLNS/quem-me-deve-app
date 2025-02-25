import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import Container from '@components/Layout/Container'
import BottomSheet from '@components/Common/BottomSheet'
import FormCurrentyInput from '@components/Common/Form/CurrentyInput'
import { handleUpdate } from '@modules/charge/controllers/chargeController'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { useTheme } from '@hooks/useTheme'
import { ChargeEditBottomSheetProps } from './types'

const ChargeEditBottomSheet: React.FC <ChargeEditBottomSheetProps> = ({ bottomSheetRef }) => {

    const dispatch = useAppDispatch()
    const { currentCharge } = useAppSelector(s => s.charge)

    const [newValue, setNewValue] = useState<number>(currentCharge!.amount)
    
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
                    <FormCurrentyInput
                        value = {newValue}
                        setValue = {v => setNewValue(v)}
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