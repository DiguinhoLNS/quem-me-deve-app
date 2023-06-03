import { Field } from "@interfaces/Field"

export interface RenderFieldsProps {
    fields: Field[]
    values: any
    errors: any
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}