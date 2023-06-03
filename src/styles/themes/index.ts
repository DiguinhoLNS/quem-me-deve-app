export const colors = {
    primary: '#ef6c00',
    secondary: '#ffac33',
    tertiary: '#a74b00',
}

export const light = {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    tertiary: '#FFFFFF',
}

export const dark = {
    primary: '#1E1E1E',
    secondary: '#151523',
    tertiary: '#1E1E1E',
}

export const status = {
    error: {
        primary: '#ED2209',
        secondary: '#B21A07',
        tertiary: '#fce8e6',
    },
    success: {
        primary: '#267D36',
        secondary: '#03723A',
        tertiary: '#e6f4ea',
    },
    info: {
        primary: '#1967D3',
        secondary: '#074FB1',
        tertiary: '#e8f0fe',
    },
    warning: {
        primary: '#FFA000',
        secondary: '#B76F00',
        tertiary: '#fff8e8',
    },
}

export const person = {
    event: {
        primary: '#B74D06',
        secondary: '#FEF0E6',
        tertiary: '',
    },
    delivery: {
        primary: '#B30000',
        secondary: '#FFF2F2',
        tertiary: '',
    },
    guest: {
        primary: '#9E6700',
        secondary: '#FFF8E8',
        tertiary: '',
    },
    provider: {
        primary: '#6249AD',
        secondary: '#F1EDFD',
        tertiary: '',
    },
}

export const wrapperColor = '#FFFFFF'
export const appbarColor = '#FFFFFF'

export const gradient = {
    primary: [colors.primary, colors.primary],
    secondary: ['#1967D3', '#074FB1'],
    disabled: ['#A49A9A', '#A49A9A'],
}

export const button = {
    disabled: '#A49A9A',
    primary: status.success.primary,
    secondary: colors.primary,
    tertiary: colors.tertiary,
}

export const statusBarColor = 'rgba(0,0,0,0.3)'

export const typography = {
    text: {
        normal: '#6A7178',
        light: '#6A7178',
        dark: '#6A7178',
    },
    title: {
        normal: '#272B30',
        light: '#272B30',
        dark: '#272B30',
    },
    subTitle: '',
    link: '#1A79CB',
}

const themes = {
    gradient,
    colors,
    button,
    statusBarColor,
    status,
    wrapperColor,
    appbarColor,
    typography,
    person
}

export default themes