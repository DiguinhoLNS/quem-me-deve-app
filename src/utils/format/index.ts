import moment from 'moment'

export function formatDate(date?: Date | null){
    if(!date){
        return ''
    }
    
    return `${moment(date).locale('pt-br').format('L')} ${moment(date).locale('pt-br').format('LT')}`
}