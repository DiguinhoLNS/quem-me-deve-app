import { Theme } from "@modules/theme/interfaces/Theme"
import { setColorScheme, setTheme } from "@modules/theme/reducers/themeReducer"
import { DispatchType } from "@redux/interfaces"
import { darkTheme, lightTheme } from "@styles/themes"
import storage from "@utils/storage"

export enum ColorScheme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

export default function getTheme(dispatch: DispatchType){
    const colorScheme = storage.getItem<ColorScheme>('colorScheme')
    const theme = storage.getItem<Theme>('theme')

    if(!!colorScheme){
        dispatch(setColorScheme(colorScheme))
    }

    if(!!theme){
        dispatch(setTheme(theme))
    }else if(!!colorScheme){
        dispatch(setTheme(colorScheme === ColorScheme.Light ? lightTheme : darkTheme))
    }
}