import { MMKV } from 'react-native-mmkv'
import info from "../info"

export const mmkv = new MMKV()

function getItem<T>(key: string){
    try {
        const local = mmkv.getString(key)
        if(!!local) return JSON.parse(local) as T
        else throw new Error(`No data found with key: ${key}`)
    } catch (error) {
        info.error('storage getItem', error)
        return null
    }
}

function setItem<T>(key: string, value: T){
    try {
        mmkv.set(key, JSON.stringify(value))
    } catch (error) {
        info.error('storage setItem', error)
    }
}

function removeItem(key: string){
    try {
        mmkv.delete(key)
    } catch (error) {
        info.error('storage removeItem', error)
    }
}

function clear(){
    try {
        mmkv.clearAll()
    } catch (error) {
        info.error('storage clear', error)
    }
}

const storage = {
    getItem, setItem, removeItem, clear
}

export default storage