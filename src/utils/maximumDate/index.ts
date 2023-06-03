export default function maximumDate(date?: Date){
    let newDate = date ?? new Date()

    newDate.setFullYear(newDate.getFullYear() + 1)

    return newDate
}