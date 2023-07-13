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

const requestAuthLoginSlice = createSlice({
    name: 'requestAuthLogin',
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
        setRequestSubmitLoginError: (state, action: PayloadAction<string>) => {
            state.requestSubmitLogin.message = action.payload

            state.requestSubmitLogin.loading = false
            state.requestSubmitLogin.error = true
        },
        resetRequestSubmitLogin: (state) => {
            state.requestSubmitLogin = {...responseInitialValues}
        },
    }
})

const { actions } = requestAuthLoginSlice

export const requestSubmitLoginActions = {
    data: actions.setRequestSubmitLoginData,
    loading: actions.setRequestSubmitLoginLoading,
    error: actions.setRequestSubmitLoginError,
    reset: actions.resetRequestSubmitLogin,
}

export default requestAuthLoginSlice.reducer