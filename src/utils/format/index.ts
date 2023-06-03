import { deburr } from 'lodash'
import moment from 'moment'
import 'moment/locale/pt-br'
import info from "@utils/info"

export function formatContactDisplayName(name: string){
    try {
        return deburr(name).toLowerCase()
    } catch (error) {
        info.error('formatContactDisplayName',error)
        return name
    }
}

export function formatDate(date: Date){
    return `${moment(date).locale('pt-br').format('L')} ${moment(date).locale('pt-br').format('LT')}`
}