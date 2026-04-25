import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { handleResponseError } from "."

export interface ResponseStatesPattern<T> {
    data: T | null
    loading: boolean
    error: boolean
    message: string
}

export interface ResponsePattern<T> {
    error: boolean
    data: T
    message: string
}

export type ResponseDefault<T> = ResponseStatesPattern<ResponsePattern<T>>

export type ResponseDefault<T> = ResponseStatesPattern<T>

export type HandleResponseActionsTypes = 'setData' | 'setLoading' | 'setError'

export interface HandleResponseActionPayload<T> {
    actionType: HandleResponseActionsTypes
    data?: ResponsePattern<T> | string
}

export type HandleResponseAction<T> = ActionCreatorWithPayload<HandleResponseActionPayload<T>>

export interface ResponseMessage {
    text?: string
}

export interface ResponseMessageOptions {
    errorMessage?: ResponseMessage
    successMessage?: ResponseMessage
}

export interface HandleResponseOptions {
    onSuccess?: () => void
    onError?: () => void
    messages?: ResponseMessageOptions
}