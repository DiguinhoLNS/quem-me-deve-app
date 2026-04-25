import { MD3Colors } from "react-native-paper/lib/typescript/types"

export interface PaletteSelectorProps {
    theme: MD3Colors
    selected: boolean
    onPress: () => void
}