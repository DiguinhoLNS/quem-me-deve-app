import React from 'react'
import { Dialog, Portal } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Spacing from '@components/Layout/Spacing'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import { useAppDispatch } from '@redux/hooks'
import handleFunction from '@utils/handleFunction'
import { DialogMessageProps } from './types'

const DialogMessage: React.FC <DialogMessageProps> = ({ children, title, description, autoClose = true, open, setOpen, actions }) => {

    const dispatch = useAppDispatch()

    const onClose = () => handleFunction(dispatch, () => setOpen(false))

    const handleAction = (action: () => void) => {
        action()
        autoClose && onClose()
    }

    return(

        <Portal>
            <Dialog
                style = {{padding: 24, borderRadius: 16}}
                visible = {open}
                onDismiss = {autoClose ? () => onClose() : () => {}}
            >
                <Container marginBottom = {8} padding = {false}>
                    <Typography.Title style = {{fontSize: 16}}>{title}</Typography.Title>
                </Container>
                <Container marginBottom = {16} padding = {false}>
                    <Typography.Text>{description}</Typography.Text>
                    {children}
                </Container>
                <Container type = "row" padding = {false} between>
                    {!!actions?.cancel && (
                        <TouchableOpacity onPress = {() => handleAction(actions.cancel!.onPress)}>
                            <Typography.Text style = {{color: '#1A79CB'}}>{actions.cancel.label ?? 'Voltar'}</Typography.Text>
                        </TouchableOpacity>
                    ) || <Spacing />}

                    {!!actions?.confirm && (
                        <TouchableOpacity onPress = {() => handleAction(actions.confirm!.onPress)}>
                            <Typography.Text style = {{color: '#1A79CB'}}>{actions.confirm.label ?? 'Ok'}</Typography.Text>
                        </TouchableOpacity>
                    ) || (
                        <TouchableOpacity onPress = {onClose}>
                            <Typography.Text style = {{color: '#1A79CB'}}>Ok</Typography.Text>
                        </TouchableOpacity>
                    )}
                </Container>
            </Dialog>
        </Portal>

    )

}

export default DialogMessage