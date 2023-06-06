import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Screen } from "../interfaces/Screen"

interface State {
    screen: Screen
}

const initialState: State = {
    screen: {
        statusBarColor: '#FFFFFF',
        navigationBarColor: '#FFFFFF',
        navigatorColor: '#FFFFFF',
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<Partial<Screen>>) => {
            state.screen = {...state.screen, ...action.payload}
        },
    }
})

export const {
    setScreen
} = appSlice.actions
export default appSlice.reducer