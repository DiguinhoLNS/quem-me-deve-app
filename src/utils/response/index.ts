import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import message from "@utils/message"
import { HandleResponseErrorProps, HandleResponseProps, InitRequestActions, ResponsePattern, ResponseStatesPattern } from "./types"

export const responseInitialValues: ResponseStatesPattern<any> = {
    data: null,
    loading: false,
    error: false,
    message: ''
}

export function initRequest(dispatch: DispatchType, { reset, loading }: InitRequestActions, resetData?: () => void){
    if(!!resetData){
        resetData()
    }

    dispatch(reset())
    dispatch(loading())
}

export function handleResponseError({dispatch, initiator, error, actions, showMessage = false}: HandleResponseErrorProps){
    info.error(`response ${initiator}`, error)

    const errorMessage = error.message ?? JSON.stringify(error)

    if(!!actions && !!errorMessage){
        dispatch(actions.error(errorMessage))
    }
    if(showMessage){
        message.danger({ message: errorMessage })
    }
}

export function handleResponse<T>({dispatch, initiator, response, actions, showMessage = false}: HandleResponseProps){
    return new Promise<T>((resolve) => {
        try {
            if(!!response){
                if(!!actions){
                    dispatch(actions.data(response))
                }

                if(response.error === false){
                    if(showMessage && !!response.message[0]){
                        message.success({ message: response.message[0] })
                    }

                    resolve(response.data)
                }else{
                    throw response.data[0]
                }
            }else{
                throw 'Erro na requisição'
            }
        } catch (error: any) {
            handleResponseError({ dispatch, initiator, error, actions, showMessage })
        }
    })
}

export function toResponsePattern<T>(data: T): ResponsePattern<T> {
    return {
        error: false,
        message: [] as string[],
        data: data as T,
    }
}