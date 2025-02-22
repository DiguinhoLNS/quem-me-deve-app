import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData } from "@modules/auth/interfaces/UserData"
import { HandleResponseActionPayload, ResponseDefault } from "@utils/response/types"
import { handleResponseActions, responseInitialValues } from "@utils/response"

interface State {
    requestSubmitLogin: ResponseDefault<UserData>
}

const initialState: State = {
    requestSubmitLogin: responseInitialValues
}

const requestAuthSlice = createSlice({
    name: 'requestAuthLogin',
    initialState,
    reducers: {
        handleRequestSubmitLogin: (state: State, action: PayloadAction<HandleResponseActionPayload<UserData>>) => {
            state.requestSubmitLogin = handleResponseActions(action.payload, state.requestSubmitLogin)
        },
    }
})

export const { handleRequestSubmitLogin } = requestAuthSlice.actions
export default requestAuthSlice.reducer