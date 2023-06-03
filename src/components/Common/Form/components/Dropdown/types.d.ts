import { SelectItem } from "@components/Common/Form/interfaces/FormSelect"

export interface FormDropdownProps {
    label?: string
    dropdownWidth?: number
    showSelectedIcon?: boolean
    data: SelectItem<any>[]
    placeholder?: string
    field: string
    value: any
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    onChange?: (item: SelectItem<any>) => void
}