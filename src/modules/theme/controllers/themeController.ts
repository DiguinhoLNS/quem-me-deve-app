import { MD3Colors } from "react-native-paper/lib/typescript/types"
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper"
import themeStatus from "../constants/status"

export function createTheme(dark: boolean, palette: MD3Colors): MD3Theme {
    if(dark){
        return {
            ...MD3DarkTheme,
            colors: {
                ...themeStatus.dark,
                ...palette
            },
            dark: true
        }
    }

    return {
        ...MD3LightTheme,
        colors: {
            ...themeStatus.light,
            ...palette
        },
        dark: false
    }
}