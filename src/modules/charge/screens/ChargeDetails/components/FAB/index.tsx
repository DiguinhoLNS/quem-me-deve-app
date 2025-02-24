import React, { useState } from 'react'
import { FAB, Portal } from 'react-native-paper'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useTheme } from '@hooks/useTheme'
import { handleShare, handleCheck, handleDelete } from '@modules/charge/controllers/chargeController'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const ChargeFAB: React.FC = () => {

    const dispatch = useAppDispatch()
    const { currentCharge } = useAppSelector(s => s.charge)

    const [open, setOpen] = useState(false)

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const theme = useTheme()

    const actions = [
        { icon: 'delete', label: 'Apagar', color: theme.colors.error, labelTextColor: theme.colors.error, onPress: () => handleDelete(dispatch, currentCharge!, navigation.goBack) },
        { icon: 'cash-check', label: 'Pagar', color: theme.colors.success, labelTextColor: theme.colors.success, onPress: () => handleCheck(dispatch, currentCharge!) },
        { icon: 'share-variant', label: 'Compartilhar', onPress: () => handleShare(dispatch, currentCharge!) },
    ]

    return(

        <>
            <FAB.Group
                open = {open}
                visible = {isFocused}
                icon = {open ? 'close' : 'dots-vertical'}
                actions = {actions}
                style = {{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    paddingBottom: 0
                }}
                onStateChange = {({ open }) => setOpen(open)}
            />
        </>

    )

}

export default ChargeFAB