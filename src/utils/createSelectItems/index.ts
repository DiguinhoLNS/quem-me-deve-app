export default function createSelectItems<T, K extends keyof T>(
    data: T[] | null,
    label: K,
    value: K,
    icon: K | null = null,
    nullValue: boolean = true
){
    if(!!data){
        const defaultOption = { value: null, label: "Todos", icon: null}
        const items = [
            ...data.map(item => ({
                icon: (item as any)[icon] ?? null,
                value: item[value] as T[K] | null,
                label: String(item[label]),
            }))
        ]

        if(nullValue === true) items.unshift(defaultOption)

        return items
    }
    return []
}