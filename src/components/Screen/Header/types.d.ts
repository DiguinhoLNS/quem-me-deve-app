import { StackHeaderProps } from "@react-navigation/stack"

export interface ScreenHeaderProps extends StackHeaderProps {
    canGoBack?: boolean
    elevated?: boolean
}