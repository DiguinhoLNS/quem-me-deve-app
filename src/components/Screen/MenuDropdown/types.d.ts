import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface MenuDropdownProps {
    children: React.ReactNode
    placeholder?: string
    visible: boolean
    setVisible: ActionCreatorWithPayload<boolean, string>
}