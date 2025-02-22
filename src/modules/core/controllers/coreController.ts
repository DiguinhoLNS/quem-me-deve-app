import { Platform, Alert } from 'react-native'
import Contacts from 'react-native-contacts'
import { Contact } from 'react-native-contacts/type'
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions'
import { DispatchType } from '@redux/interfaces'
import info from '@utils/info'
import { setContacts } from '../reducers/coreReducer'

export async function requestContactsPermission(){
    const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CONTACTS : PERMISSIONS.ANDROID.READ_CONTACTS;

    const result = await check(permission)

    if(result === RESULTS.GRANTED){
        return true
    }

    if(result === RESULTS.DENIED) {
        const requestResult = await request(permission)
        return requestResult === RESULTS.GRANTED
    }

    if(result === RESULTS.BLOCKED){
        Alert.alert(
            "Permissão necessária",
            "Você bloqueou a permissão de contatos. Vá até as configurações do seu dispositivo para concedê-la."
        )

        return false
    }

    return false
}

export async function getContacts(dispatch: DispatchType){
    const permissionGranted = await requestContactsPermission()

    if(permissionGranted){
        const contacts = await Contacts.getAll()

        dispatch(setContacts(contacts))
    }
}

export function getContactName(contact: Contact): string {
    try {
        if(Platform.OS === 'android'){
            return contact.displayName ?? ''
        }else{
            if(!!contact.givenName && !!contact.familyName){
                return `${contact.givenName} ${contact.familyName}`
            }else{
                return contact.givenName
            }
        }
    } catch (error) {
        info.error('getContactName', error)
        return ''
    }
}

export function sortCompareContatosValues(a: Contact, b: Contact){
    if ( getContactName(a) < getContactName(b) ){
        return -1
    }
    if ( getContactName(a) > getContactName(b) ){
        return 1
    }
    return 0
}

export function sortCompareContatosKeys(a: string, b: string){
    if ( a < b ){
        return -1
    }
    if ( a > b ){
        return 1
    }
    return 0
}