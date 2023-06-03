import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import themes from "@styles/themes"
import { Screen } from "../interfaces/Screen"

interface State {
    screen: Screen
}

const initialState: State = {
    screen: {
        statusBarColor: themes.colors.tertiary,
        navigationBarColor: '#FFFFFF',
        navigatorColor: '#F1F3F5',
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