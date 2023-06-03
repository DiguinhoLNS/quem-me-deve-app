import { SelectItem } from "../../interfaces/FormSelect"

export interface FormMutiSelectProps {
    label?: string
    data: SelectItem<any>[]
    placeholder?: string
    field?: string
    values: any[]
    error?: boolean
    onChange?: (value: any[]) => void
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
}