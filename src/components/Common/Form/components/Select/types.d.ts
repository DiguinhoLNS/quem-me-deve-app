import { SelectItem } from "../../interfaces/FormSelect"

export interface FormSelectProps<T, P> {
    label?: string
    placeholder?: string
    field?: string
    value: T
    error?: boolean
    onChange?: (value: T) => void
    setFieldValue?: (field: string, value: T, shouldValidate?: boolean) => void
    data: SelectItem<P>[]
}