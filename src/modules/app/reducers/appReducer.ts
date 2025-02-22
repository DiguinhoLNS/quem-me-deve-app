import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Screen } from "../interfaces/Screen"

interface State {
    screen: Screen

    network?: boolean

    showTabBar: boolean
}

const initialState: State = {
    screen: {
        statusBarColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        disableBottomEdge: false
    },

    network: undefined,

    showTabBar: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<Screen>) => {
            state.screen = action.payload
        },

        setShowTabBar: (state, action: PayloadAction<boolean>) => {
            state.showTabBar = action.payload
        },

        setAppNetwork: (state, action: PayloadAction<boolean>) => {
            state.network = action.payload
        },

        resetAll: () => {},
    }
})

export const {
    setScreen,
    setShowTabBar,
    setAppNetwork,
    resetAll
} = appSlice.actions
export default appSlice.reducer