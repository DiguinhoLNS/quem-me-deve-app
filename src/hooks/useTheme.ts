import { useTheme as userPaperTheme } from "react-native-paper"
import { Theme } from "@modules/theme/interfaces/Theme"

export const useTheme = () => userPaperTheme<Theme>()