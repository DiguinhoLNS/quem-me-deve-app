import React from "react"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface DialogAction {
    label?: string
    onPress: () => void
}

export interface DialogMessageProps {
    children: React.ReactNode
    title: string
    description: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>> | ActionCreatorWithPayload<boolean, string>
    autoClose?: boolean

    actions?: {
        cancel?: DialogAction
        confirm?: DialogAction
    }
}