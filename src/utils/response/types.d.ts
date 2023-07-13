import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { DispatchType } from "@redux/interfaces"

export interface ResponseStatesPattern<T> {
    data: T | null
    loading: boolean
    error: boolean
    message: string
}

export interface ResponsePattern<T> {
    error: boolean
    message: string[]
    data: T
}

export type ResponseDefault<T> = ResponseStatesPattern<ResponsePattern<T>>

export interface HandleResponseActions {
    data: ActionCreatorWithPayload<ResponsePattern<any>, string>
    loading: ActionCreatorWithoutPayload<string>
    error: ActionCreatorWithoutPayload<string>
    reset: ActionCreatorWithoutPayload<string>
}

export type HandleResponseErrorActions = Omit<HandleResponseActions, 'data' | 'loading'>

export type InitRequestActions = Omit<HandleResponseActions, 'data' | 'error'>

export interface HandleResponseProps {
    initiator: string
    dispatch: DispatchType
    response: ResponsePattern<any> | null
    actions?: HandleResponseActions
    showMessage?: boolean
}

export interface HandleResponseErrorProps {
    initiator: string
    dispatch: DispatchType
    error: any
    actions?: HandleResponseErrorActions
    showMessage?: boolean
}