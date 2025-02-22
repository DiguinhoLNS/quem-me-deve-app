import { KeyboardTypeOptions, StyleProp, TextStyle } from "react-native"

export type FormInputProps = {
    label?: string,
    placeholder?: string,
    keyboardType?: KeyboardTypeOptions,
    value: string,
    error?: boolean,
    secure?: boolean,
    disabled?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    style?: StyleProp<TextStyle>,
    lines?: number,
    right?: React.ReactNode,
    showRight?: boolean,
    onChangeText: (text: string) => void,
}