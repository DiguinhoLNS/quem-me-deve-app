import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import message from "@utils/message"
import { HandleResponseAction, HandleResponseActionPayload, ResponseDefault, ResponsePattern, ResponseStatesPattern } from "./types"

export const responseInitialValues: ResponseStatesPattern<any> = {
    data: null,
    loading: false,
    error: false,
    message: ''
}

export function initRequest<T>(dispatch: DispatchType, action: HandleResponseAction<T>, resetData?: () => void){
    if(!!resetData) resetData()

    dispatch(action({ actionType: 'setLoading' }))
}

export function handleResponseError<T>(
    initiator: string, 
    dispatch: DispatchType, 
    action: HandleResponseAction<T>, 
    error: any,
    showMessage: boolean = false
){
    const messageError = error.message ?? JSON.stringify(error)

    info.error(`response ${initiator}`, error)

    dispatch(action({ actionType: 'setError', data: messageError }))

    if(!!showMessage){
        message.danger({ message: messageError })
    }
}

export function handleResponse<T>(
    initiator: string,
    dispatch: DispatchType,
    response: ResponsePattern<T> | null, 
    action: HandleResponseAction<T>,
    showMessage: boolean = true,
    onError?: () => void
){
    return new Promise<T>((resolve) => {
        try {
            if(!!response){
                dispatch(action({ actionType: 'setData', data: response }))

                resolve(response.data)
            }else{
                const errorMessage = { message: `${initiator} Error` }
                throw errorMessage
            }
        } catch (error: any) {
            handleResponseError<T>(initiator, dispatch, action, error, showMessage)

            if(!!onError) onError()
        }
    })
}

export function handleResponseActions<T>(payload: HandleResponseActionPayload<T>, state: ResponseDefault<T>): ResponseDefault<T> {
    const { actionType, data } = payload
    let newState = {...state}

    if(actionType === 'setLoading'){
        newState = {
            ...responseInitialValues,
            loading: true,
        }
    }
    if(actionType === 'setData'){
        newState.data = data as ResponsePattern<T>
        newState.loading = false
        newState.error = false
    }
    if(actionType === 'setError'){
        newState.loading = false
        newState.error = true
        newState.message = data as string
    }

    return newState
}