export interface BoxProps {
    title: string
    description: string
    date: string
    done?: boolean
    onPress: () => void
}