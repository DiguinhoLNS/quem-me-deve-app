import { NavigationProp } from "@react-navigation/native"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import storage from "@utils/storage"
import resetNavigation from "@utils/resetNavigation"
import { setAuthLogout } from "../../../reducers/authReducer"

export default async function localRemoveUser(dispatch: DispatchType, navigation: NavigationProp<any>){
    try {
        storage.clear()

        resetNavigation(navigation)

        dispatch(setAuthLogout())
    } catch (error) {
        info.error('localRemoveUserData', error)
    }
}  