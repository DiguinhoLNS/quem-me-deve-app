import moment from "moment"
import { hideMessage } from "react-native-flash-message"
import { NetInfoState } from "@react-native-community/netinfo"
import { APP_VERSION } from "@config/index"
import getTheme from "@modules/theme/scripts/getTheme"
import { setAuthLoading } from "@modules/auth/reducers/authReducer"
import { getAuthLocalData } from "@modules/auth/controllers/authController"
import { DispatchType } from "@redux/interfaces"
import info from "@utils/info"
import message from "@utils/message"
import { setAppNetwork } from "../reducers/appReducer"

export async function getAppLocalData(dispatch: DispatchType){
    getTheme(dispatch)
    getAuthLocalData(dispatch)

    dispatch(setAuthLoading(false))
}

export function handleInternetConnection(dispatch: DispatchType, netInfo: NetInfoState){
    try {
        if(netInfo.isInternetReachable !== null){
            dispatch(setAppNetwork(netInfo.isInternetReachable))

            if(netInfo.isInternetReachable === true){
                hideMessage()
            }else{
                message.danger({ message: "Sem conexão com a internet!" })
            }
        }
    } catch (error) {
        info.error('handleInternetConnection', error)
    }
}

export function getAppVersion(){
    const date = moment(APP_VERSION.RELEASE_DATE, "DD/MM/YYYY").format('YYYY/MM/DD')

    const version = APP_VERSION.CODE
    const build = `${date.replaceAll('/', '')}-${APP_VERSION.CODE.replaceAll('.', '')}-${APP_VERSION.BUILD}${APP_VERSION.DEVBUILD}`

    return { version, build }
}