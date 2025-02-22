import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import storage from "@utils/storage"

export function createLocalFunctions<T>(
    storageKey: string,
    setValue: ActionCreatorWithPayload<T | null, string>,
){
    return {
        get: (dispatch: DispatchType, saveOnRedux: boolean = true) => local.get(dispatch, storageKey, setValue, saveOnRedux),
        set: (dispatch: DispatchType, value: T, saveOnRedux: boolean = true) => local.set(dispatch, storageKey, setValue, value, saveOnRedux),
        remove: (dispatch: DispatchType) => local.remove(dispatch, storageKey, setValue),
    }
}

function get<T>(
    dispatch: DispatchType,
    storageKey: string,
    setValue?: ActionCreatorWithPayload<T | null, string>,
    saveOnRedux: boolean = true
){
    try {
        const value = storage.getItem<T>(storageKey)

        if(!!value){
            if(saveOnRedux && setValue){
                dispatch(setValue(value))
            }

            return value
        }

        return null
    } catch (error) {
        info.error('getLocal', error)

        return null
    }
}

function set<T>(
    dispatch: DispatchType,
    storageKey: string,
    setData: ActionCreatorWithPayload<T | null, string>,
    value: T,
    saveOnRedux: boolean = true
){
    try {
        if(saveOnRedux){
            dispatch(setData(value))
        }

        storage.setItem(storageKey, value)
    } catch (error) {
        info.error('setLocal', error)
    }
}

function remove<T>(
    dispatch: DispatchType,
    storageKey: string,
    setData: ActionCreatorWithPayload<T | null>,
    saveOnRedux: boolean = true,
){
    try {
        if(saveOnRedux){
            dispatch(setData(null))
        }

        storage.removeItem(storageKey)
    } catch (error) {
        info.error('removeLocal', error)
    }
}

const local = {
    get, set, remove
}

export default local