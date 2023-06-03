export default function isoDateTime(date?: Date){
    return (new Date(date ?? Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1)
}