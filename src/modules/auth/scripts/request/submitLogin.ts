import { formLoginValues } from "@modules/auth/screens/Login/components/Form/config"
import { DispatchType } from "@redux/interfaces"
import localUser from "../local/user"

export default async function submitLogin(dispatch: DispatchType, body: typeof formLoginValues){
    
    localUser.set(dispatch, body as any, true)
}