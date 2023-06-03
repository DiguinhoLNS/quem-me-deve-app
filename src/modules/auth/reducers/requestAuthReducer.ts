import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData } from "@modules/auth/interfaces/UserData"
import { ResponseDefault, ResponsePattern } from "@utils/response/types"
import { responseInitialValues } from "@utils/response"

interface State {
    requestSubmitLogin: ResponseDefault<UserData>
}

const initialState: State = {
    requestSubmitLogin: responseInitialValues
}

const requestAuthSlice = createSlice({
    name: 'requestAuth',
    initialState,
    reducers: {
        setRequestSubmitLoginData: (state, action: PayloadAction<ResponsePattern<UserData>>) => {
            state.requestSubmitLogin.data = action.payload
            state.requestSubmitLogin.error = false
            state.requestSubmitLogin.loading = false
        },
        setRequestSubmitLoginLoading: (state) => {
            state.requestSubmitLogin.loading = true
            state.requestSubmitLogin.error = false
        },
        setRequestSubmitLoginError: (state) => {
            state.requestSubmitLogin.loading = false
            state.requestSubmitLogin.error = true
        },
        setRequestSubmitLoginMessage: (state, action: PayloadAction<string>) => {
            state.requestSubmitLogin.message = action.payload
        },
        resetRequestSubmitLogin: (state) => {
            state.requestSubmitLogin = {...responseInitialValues}
        },
    }
})

const actions = requestAuthSlice.actions

export const requestSubmitLoginActions = {
    data: actions.setRequestSubmitLoginData,
    loading: actions.setRequestSubmitLoginLoading,
    error: actions.setRequestSubmitLoginError,
    message: actions.setRequestSubmitLoginMessage,
    reset: actions.resetRequestSubmitLogin,
}

export default requestAuthSlice.reducer