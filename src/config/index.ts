import { Platform } from "react-native"

export const SHOW_RESPONSE_LOG = {
    REQUEST: false,
    HEADER: false,
    BODY: false,
    RESPONSE: false,
    ERROR: false,
}

export const SHOW_LOG = {
    LOG: false,
    DATA: false,
    ERROR: false,
    WARN: false,
}

export const IOS_APP_VERSION = '1.0.0-Boilerplate'
export const ANDROID_APP_VERSION = '1.0.0-Boilerplate'

export const APP_VERSION = Platform.OS === 'ios' ? IOS_APP_VERSION : ANDROID_APP_VERSION