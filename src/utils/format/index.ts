import moment from 'moment'
import { deburr } from 'lodash'
import { formatNumber } from 'react-native-currency-input'
import formatCurrencyOptions from '@modules/charge/constants/formatCurrencyOptions'
import info from '@utils/info'

export function formatDate(date?: Date | null){
    if(!date){
        return ''
    }
    
    return `${moment(date).locale('pt-br').format('L')} ${moment(date).locale('pt-br').format('LT')}`
}

export function formatContactDisplayName(name: string){
    try {
        return deburr(name).toLowerCase()
    } catch (error) {
        info.error('formatContactDisplayName',error)
        return name
    }
}

export function formatCurrency(value: number){
    return formatNumber(value, formatCurrencyOptions)
}