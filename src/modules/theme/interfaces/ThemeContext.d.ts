import { ThemePalette } from "./Palette"

export interface ThemeContextType {
    isDarkTheme: boolean
    palette: ThemePalette
    toggleTheme: () => void
    togglePalette: (palette: ThemePalette) => void
}