import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { darkTheme, lightTheme } from "@styles/themes"
import storage from "@utils/storage"
import { Theme } from "../interfaces/Theme"

export enum ColorScheme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

interface State {
    theme: Theme
}

const initialState: State = {
    theme: lightTheme,
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload

            storage.setItem('theme', action.payload)
        },
        toggleTheme: (state) => {
            const newTheme = state.theme!.scheme === ColorScheme.Light ? darkTheme : lightTheme
            state.theme = newTheme

            storage.setItem('theme', newTheme)
        }
    }
})

export const {
    setTheme, toggleTheme
} = ThemeSlice.actions
export default ThemeSlice.reducer