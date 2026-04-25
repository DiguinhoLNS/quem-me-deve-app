import React from 'react'
import { Button, Dialog, Portal, Text } from 'react-native-paper'
import { useTheme } from '@hooks/useTheme'
import { useAppDispatch } from '@redux/hooks'
import handleFunction from '@utils/handleFunction'
import { DialogMessageProps } from './types'

const DialogMessage: React.FC <DialogMessageProps> = ({
    children,
    title,
    description,
    autoClose = true,
    open,
    setOpen,
    actions
}) => {

    const dispatch = useAppDispatch()

    const theme = useTheme()

    const onClose = () => handleFunction(dispatch, () => setOpen(false))

    const handleAction = (action: () => void) => {
        action()

        if(autoClose) onClose()
    }

    return(

        <Portal>
            <Dialog
                visible = {open}
                dismissable = {autoClose}
                onDismiss = {autoClose ? () => onClose() : () => {}}
            >
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    {!!description && <Text>{description}</Text>}
                    {children}
                </Dialog.Content>
                <Dialog.Actions>
                    {!!actions?.cancel && (
                        <Button
                            mode = "text"
                            onPress = {() => handleAction(actions.cancel!.onPress)}
                        >{actions.cancel.label ?? 'Voltar'}</Button>
                    )}
                    {!!actions?.confirm && (
                        <Button
                            mode = "contained"
                            buttonColor = {theme.colors.success}
                            textColor = {theme.colors.onSuccess}
                            loading = {actions.confirm.loading}
                            onPress = {() => handleAction(actions.confirm!.onPress)}
                        >{actions.confirm.label ?? 'Ok'}</Button>
                    )}
                </Dialog.Actions>
            </Dialog>
        </Portal>

    )

}

export default DialogMessage