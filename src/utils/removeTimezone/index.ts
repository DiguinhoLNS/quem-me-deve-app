export default function removeTimezone(date: Date){
    let newDate = new Date(date)
    newDate.setHours(newDate.getHours() - 3)
    return newDate
}