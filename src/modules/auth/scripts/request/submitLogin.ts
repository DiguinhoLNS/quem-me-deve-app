import { APP_ENDPOINT } from "@env"
import { UserData } from "@modules/auth/interfaces/UserData"
import { requestSubmitLoginActions } from "@modules/auth/reducers/requestAuthReducer"
import { formLoginValues } from "@modules/auth/screens/Login/components/Form/config"
import { DispatchType } from "@redux/interfaces"
import request from "@utils/request"
import { ResponsePattern } from "@utils/response/types"
import { handleResponse, initRequest } from "@utils/response"
import localUser from "../local/user"

export default async function submitLogin(dispatch: DispatchType, body: typeof formLoginValues){
    /*
    initRequest(dispatch, requestSubmitLoginActions)

    const options = { messages: { errorMessage: {} } }
    const endpoint = `${APP_ENDPOINT}/users/login`
    const response = await request.post<ResponsePattern<UserData>>({ endpoint, body })

    handleResponse('submitLogin', dispatch, response, requestSubmitLoginActions, options)
    .then(async data => {
        localUser.set(dispatch, data, true)
    })
    */
    localUser.set(dispatch, body as any, true)
}