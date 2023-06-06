import { Theme } from "@modules/theme/interfaces/Theme"

export const colorsTheme = {
    primary: '#F57625',
    secondary: '#F55833',
    tertiary: '#F5BE3E',
}

export const statusTheme = {
    error: {
        primary: '#f44336',
        secondary: '#EABBBB',
        tertiary: '#d32f2f',
    },
    success: {
        primary: '#4caf50',
        secondary: '#b3ffae',
        tertiary: '#388e3c',
    },
    info: {
        primary: '#2196f3',
        secondary: '#AFD6F7',
        tertiary: '#1976d2',
    },
    warning: {
        primary: '#ff9800',
        secondary: '#FFE694',
        tertiary: '#f57c00',
    },
}

export const lightTheme: Theme = {
    scheme: 'light-mode',

    colors: colorsTheme,
    status: statusTheme,
    
    layout: {
        primary: '#FFFFFF',
        secondary: '#dcdcdc',
        tertiary: '#a9a9a9',

        divider: '#0000001f',
    },
    typography: {
        text: {
            normal: '#202124',
            light: '#414549',
            dark: '#5f6368',
        },
    }
}

export const darkTheme: Theme = {
    scheme: 'dark-mode',

    colors: colorsTheme,
    status: statusTheme,

    layout: {
        primary: '#202124',
        secondary: '#303134',
        tertiary: '#1E1E1E',

        divider: '#ffffff1f',
    },
    typography: {
        text: {
            normal: '#ffffff',
            light: '#ffffffb3',
            dark: '#ffffff80',
        },
    }
}