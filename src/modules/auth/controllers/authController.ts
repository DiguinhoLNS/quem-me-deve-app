import { NavigationProp } from "@react-navigation/native"
import { resetAll } from "@modules/app/reducers/appReducer"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import storage from "@utils/storage"
import resetNavigation from "@utils/resetNavigation"
import { createLocalFunctions } from "@utils/local"
import { UserData } from "../interfaces/UserData"
import { setAuthLoading, setAuthLogin, setAuthLogout } from "../reducers/authReducer"

export const localUser = {
    ...createLocalFunctions('authUser', setAuthLogin)
}

export async function getAuthLocalData(dispatch: DispatchType){
    localUser.get(dispatch)
}

export function logout(dispatch: DispatchType, user: UserData, navigation: NavigationProp<any>){
    try {
        resetNavigation(navigation)

        cleanAll(dispatch)

        dispatch(setAuthLogout())
    } catch (error) {
        info.error('logout', error)
    } finally {
        dispatch(setAuthLoading(false))
    }
}

export function cleanAll(dispatch: DispatchType){
    try {
        storage.clear()
        
        dispatch(resetAll())
    } catch (error) {
        info.error('cleanAll', error)
    } finally {
        dispatch(setAuthLoading(false))
    }
}