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
    isDark: boolean
}

const initialState: State = {
    theme: lightTheme,
    isDark: false
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
            state.isDark = action.payload.scheme === ColorScheme.Dark

            storage.setItem('theme', action.payload)
        },
        toggleTheme: (state) => {
            const newTheme = state.theme!.scheme === ColorScheme.Light ? darkTheme : lightTheme

            state.theme = newTheme
            state.isDark = newTheme.scheme === ColorScheme.Dark

            storage.setItem('theme', newTheme)
        }
    }
})

export const { setTheme, toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer