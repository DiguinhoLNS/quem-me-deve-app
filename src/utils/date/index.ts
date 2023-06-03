export function addHours(date: Date, hoursToAdd: number){
    date.setHours(date.getHours() + hoursToAdd)
    return date
}