import { StackHeaderProps } from "@react-navigation/stack"

export interface HeaderProps extends StackHeaderProps {
    backRoute?: string
    canGoBack?: boolean
    title?: string
    onPress?: () => void
    menu?: JSX.Element
}