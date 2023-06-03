import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData } from "../interfaces/UserData"

interface State {
    userData: UserData | null
    
    isLogged: boolean,
    authLoading: boolean,
}

const initialState: State = {
    userData: null,

    isLogged: false,
    authLoading: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload
        },

        setAuthLogin: (state) => {
            state.isLogged = true
        },
        setAuthLogout: (state) => {
            state.userData = null

            state.isLogged = false
            state.authLoading = false
        },
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.authLoading = action.payload
        },
    }
})

export const {
    setAuthUserData,
    setAuthLogin, setAuthLogout, setAuthLoading
} = authSlice.actions
export default authSlice.reducer