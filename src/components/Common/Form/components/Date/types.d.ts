export interface FormDateProps {
    label?: string
    mode?: "date" | "time" | "datetime" | undefined
    field: string,
    minimunDate?: Date
    disabled?: boolean
    error?: boolean,
    dtFim?: Date,
    value: Date,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
}