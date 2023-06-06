import { UserData } from "@modules/auth/interfaces/UserData"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import storage from "@utils/storage"
import setUserData from "./localSetUser"

export default function localGetUser(dispatch: DispatchType){
    try {
        const localUser = storage.getItem<UserData>('userData')
        if(!!localUser){
            setUserData(dispatch, localUser, true)
        }
    } catch (error: any) {
        info.error('localGetUserData',error)
    }
}