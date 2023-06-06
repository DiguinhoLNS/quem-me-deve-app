import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { lightTheme } from "@styles/themes"
import storage from "@utils/storage"
import { Theme } from "../interfaces/Theme"

export enum ColorScheme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

interface State {
    colorScheme: ColorScheme
    theme: Theme
}

const initialState: State = {
    colorScheme: ColorScheme.Light,
    theme: lightTheme
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
            state.colorScheme = action.payload

            storage.setItem('colorScheme', action.payload)
        },
        toggleColorScheme: (state) => {
            const newColorScheme = state.colorScheme === ColorScheme.Light ? ColorScheme.Dark : ColorScheme.Light
            state.colorScheme = newColorScheme

            storage.setItem('colorScheme', newColorScheme)
        },
    
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload

            storage.setItem('theme', action.payload)
        },
    }
})

export const { 
    setColorScheme, toggleColorScheme,
    setTheme
} = ThemeSlice.actions
export default ThemeSlice.reducer