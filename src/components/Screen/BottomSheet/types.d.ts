import { LegacyRef, RefObject } from "react"
import RBSheet from "react-native-raw-bottom-sheet"

export interface BottomSheetProps {
    children: React.ReactNode
    sheetRef: RefObject<RBSheet>
    closeOnDragDown?: boolean
    onClose?: () => void
    height?: number
    title?: string
}