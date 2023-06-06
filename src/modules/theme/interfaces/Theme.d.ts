export interface Theme {
    scheme: 'dark-mode' | 'light-mode'

    colors: ThemeColorPattern
    status: {
        error: ThemeColorPattern
        success: ThemeColorPattern
        info: ThemeColorPattern
        warning: ThemeColorPattern
    }

    layout: ThemeLayout
    typography: ThemeTypography
}

export interface ThemeLayout extends ThemeColorPattern {
    divider: string
}

export interface ThemeTypography {
    text: ThemeTextColorPattern
}

export interface ThemeColorPattern {
    primary: string
    secondary: string
    tertiary: string
}

export interface ThemeTextColorPattern {
    normal: string
    light: string
    dark: string
}