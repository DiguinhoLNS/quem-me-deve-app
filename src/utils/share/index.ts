import Share, { ShareOptions } from 'react-native-share'
import Clipboard from "@react-native-community/clipboard"
import info from '@utils/info'
import message from '@utils/message'

function copy(value: string){
    Clipboard.setString(value)
    message.success({ message: 'Copiado para a área de transferência' })
}

async function social(options: ShareOptions){
    try {
        await Share.open({
            title: 'Compartilhar',
            ...options,
        })
    } catch (error) {
        info.error('share social',error)
    }
}

const share = {
    copy, social
}

export default share