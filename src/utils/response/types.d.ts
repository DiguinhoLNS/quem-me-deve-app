import { MessageOptions } from "react-native-flash-message"
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { handleResponseError } from "."

export interface ResponseStatesPattern<T> {
    data: T | null
    loading: boolean
    error: boolean
    message: string
}

export interface ResponsePattern<T> {
    flagErro: boolean
    listaMensagens: string[]
    listaResultados: T
}

export type ResponseDefault<T> = ResponseStatesPattern<ResponsePattern<T>>

export interface HandleResponseReducers {
    data: ActionCreatorWithPayload<ResponsePattern<any>, string>
    loading: ActionCreatorWithoutPayload<string>
    error: ActionCreatorWithoutPayload<string>
    message: ActionCreatorWithPayload<string, string>
    reset: ActionCreatorWithoutPayload<string>
}

export type HandleResponseErrorReducers = Omit<HandleResponseReducers, 'data' | 'loading'>

export type InitRequestReducers = Omit<HandleResponseReducers, 'data' | 'error' | 'message'>

export interface ResponseMessageOptions {
    errorMessage?: Partial<MessageOptions>
    successMessage?: Partial<MessageOptions>
}

export interface HandleResponseOptions {
    onSuccess?: () => void
    onError?: () => void
    messages?: ResponseMessageOptions
}