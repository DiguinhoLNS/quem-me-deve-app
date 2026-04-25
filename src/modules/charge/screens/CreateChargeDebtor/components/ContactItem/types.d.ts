export interface ContactItemProps {
    label: string
    description?: string
    selected?: boolean
    onPress: () => void
}