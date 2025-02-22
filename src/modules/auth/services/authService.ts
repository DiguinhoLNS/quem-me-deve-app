
import { APP_ENDPOINT } from "@env"
import { DispatchType } from "@redux/interfaces"
import request from "@utils/request"
import { ResponsePattern } from "@utils/response/types"
import { handleResponse, initRequest } from "@utils/response"
import { UserData } from "../interfaces/UserData"
import { localUser } from "../controllers/authController"
import { formLoginValues } from "../screens/AuthLogin/components/Form/config"
import { handleRequestSubmitLogin } from "../reducers/requestAuthReducer"

export async function submitLogin(dispatch: DispatchType, body: typeof formLoginValues){
    localUser.set(dispatch, {
        ...body,
        dtLogin: new Date(),
    })

    /* EXAMPLE OF USE OF REQUEST */
    
    // initRequest(dispatch, handleRequestSubmitLogin)

    // const endpoint = `${APP_ENDPOINT}/users/login`
    // const response = await request.post<ResponsePattern<UserData>>({ endpoint, body })

    // handleResponse('submitLogin', dispatch, response, handleRequestSubmitLogin, true)
    // .then(data => {
    //     localUser.set(dispatch, {
    //         ...data,
    //         dtLogin: new Date(),
    //     })
    // })
}