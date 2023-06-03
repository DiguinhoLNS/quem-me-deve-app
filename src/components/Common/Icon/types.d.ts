import { StyleProp, TextStyle } from "react-native"

export interface IconProps {
    name: string
    color?: string
    size?: number
    style?: StyleProp<TextStyle>
}