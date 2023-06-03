import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native"

export type FormInputProps = {
    field: string,
    mode?: "outlined" | "flat",
    label?: string,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    value: string,
    error?: boolean,
    secure?: boolean,
    editable?: boolean,
    mask?: string,
    maskReturn?: 'formatted' | 'extracted',
    style?: StyleProp<TextStyle>,
    lines?: number,
    right?: React.ReactNode,
    onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
}