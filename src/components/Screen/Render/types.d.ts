import React from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export interface ScreenStatusBarProps {
    barStyle?: 'light-content' | 'dark-content'
    backgroundColor?: string
    translucent?: boolean
    animated?: boolean
}

export interface ScreenRenderProps {
    children: React.ReactNode
    statusBarOptions?: ScreenStatusBarProps
    statusBarMargin?: boolean
    header?: React.ReactNode
    align?: 'center' | 'flex-start' | 'space-between'
    bounces?: boolean
    wrapperColor?: string
    paddingBottom?: number
    onRefresh?: Function
    loadingColor?: string[],
}