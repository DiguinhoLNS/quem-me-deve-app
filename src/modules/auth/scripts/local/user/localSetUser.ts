import { UserData } from "@modules/auth/interfaces/UserData"
import { setAuthLogin, setAuthUserData } from "@modules/auth/reducers/authReducer"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import storage from "@utils/storage"

export default function localSetUser(dispatch: DispatchType, userData: UserData, setLogin?: boolean){
    try {
        storage.setItem('userData', userData)
        dispatch(setAuthUserData(userData))
        if(setLogin === true) dispatch(setAuthLogin())
    } catch (error) {
        info.error('localSetUserData', error)
    }
}