import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native"

export type FormInputProps = {
    label?: string,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    value: string,
    error?: boolean,
    secure?: boolean,
    disabled?: boolean,
    style?: StyleProp<TextStyle>,
    lines?: number,
    right?: React.ReactNode,
    onChangeText: (text: string) => void,
}