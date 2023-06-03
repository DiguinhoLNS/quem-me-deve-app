export default function formHasChanges<T>(currentValues: T, initialValues: T){
    for(let key of Object.keys(currentValues as any)){
        if((currentValues as any)[key] !== (initialValues as any)[key]) return true
    }
    return false
}