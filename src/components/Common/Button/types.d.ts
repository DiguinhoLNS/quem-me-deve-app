import { StyleProp, ViewStyle } from "react-native"

export type ButtonProps = {
    type?: 'default' | 'outline'
    style?: StyleProp<ViewStyle>
    color?: string
    labelColor?: string
    icon?: string
    label?: string,
    marginHorizontal?: boolean,
    marginBottom?: number,
    disabled?: boolean,
    loading?: boolean,
    loadingColor?: string,
    onPress?: Function,
}