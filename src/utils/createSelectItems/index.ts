export default function createSelectItems<T, K extends keyof T>(
    data: T[] | null,
    label: K,
    value: K,
    nullValue: boolean = true
){
    if(!!data){
        const defaultOption = { value: null, label: "Todos"}
        const items = [
            ...data.map(item => ({
                value: item[value] as T[K] | null,
                label: String(item[label]),
            }))
        ]

        if(nullValue === true) items.unshift(defaultOption)

        return items
    }
    return []
}