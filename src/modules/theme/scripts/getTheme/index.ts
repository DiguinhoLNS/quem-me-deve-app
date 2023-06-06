import { Theme } from "@modules/theme/interfaces/Theme"
import { setTheme } from "@modules/theme/reducers/themeReducer"
import { DispatchType } from "@redux/interfaces"
import { lightTheme } from "@styles/themes"
import storage from "@utils/storage"

export enum ColorScheme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

export default function getTheme(dispatch: DispatchType){
    const theme = storage.getItem<Theme>('theme')

    dispatch(setTheme(theme ?? lightTheme))
}