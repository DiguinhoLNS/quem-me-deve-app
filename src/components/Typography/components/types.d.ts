import React from "react"
import { GestureResponderEvent, StyleProp, TextStyle, TouchableOpacity } from "react-native"

export interface TypographyElementProps extends React.ComponentType<Pick<TextProps>> {
    children: React.ReactNode
    style?: StyleProp<TextStyle>
    theme?: 'normal' | 'light' | 'dark'
}

export interface TypographyLinkProps {
    onPress?: ((event: GestureResponderEvent) => void)
    disabled?: boolean
    touchableStyle?: StyleProp<ViewStyle>
}