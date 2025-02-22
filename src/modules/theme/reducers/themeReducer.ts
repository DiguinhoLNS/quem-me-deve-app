import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import storage from "@utils/storage"
import { ThemeType } from "@interfaces/ThemeType"

interface State {
    themeType: ThemeType
}

const initialState: State = {
    themeType: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.themeType = action.payload

            storage.setItem('themeType', action.payload)
        },
        toggleTheme: (state) => {
            const newTheme = state.themeType === 'light' ? 'dark' : 'light'

            storage.setItem('themeType', newTheme)
        }
    }
})

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer