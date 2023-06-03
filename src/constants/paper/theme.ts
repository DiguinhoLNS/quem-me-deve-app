import { DefaultTheme } from "react-native-paper"
import themes from "@styles/themes"

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        error: themes.status.error.primary,
    },
    dark: false,
}

export default theme