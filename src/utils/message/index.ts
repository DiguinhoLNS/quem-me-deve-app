import { Platform } from "react-native"
import { getStatusBarHeight } from "react-native-safearea-height"
import { MessageOptions, MessageType, showMessage } from "react-native-flash-message"

const defaultOptions: Partial<MessageOptions> = {
    floating: true,
    duration: 10000,
    statusBarHeight: Platform.OS === 'ios' ? getStatusBarHeight() : undefined
}

function messageTitle(type: MessageType){
    if(type === 'success') return 'Sucesso'
    if(type === 'info') return 'Informação'
    if(type === 'warning') return 'Atenção'
    return 'Erro'
}

function messageConstructor(type: MessageType, messageOptions?: MessageOptions){
    showMessage({
        type,
        message: messageTitle(type),
        ...defaultOptions,
        ...messageOptions,
    })
}

const message = {
    success: (messageOptions?: MessageOptions) => messageConstructor('success', messageOptions),
    info: (messageOptions?: MessageOptions) => messageConstructor('info', messageOptions),
    warning: (messageOptions?: MessageOptions) => messageConstructor('warning', messageOptions),
    danger: (messageOptions?: MessageOptions) => messageConstructor('danger', messageOptions),
}

export default message