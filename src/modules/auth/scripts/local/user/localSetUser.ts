import { UserData } from "@modules/auth/interfaces/UserData"
import { setAuthLogin, setAuthUserData } from "@modules/auth/reducers/authReducer"
import { DispatchType } from "@redux/interfaces"
import storage from "@utils/storage"
import info from "@utils/info"

export default async function localSetUser(dispatch: DispatchType, userData: UserData, setLogin?: boolean){
    try {
        await storage.setItem('userData', userData)
        dispatch(setAuthUserData(userData))
        if(setLogin === true) dispatch(setAuthLogin())
    } catch (error) {
        info.error('localSetUserData', error)
    }
}