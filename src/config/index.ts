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

export const ISDEV = __DEV__

export const IOS_APP_VERSION = {
    CODE: '0.0.1',
    BUILD: 1,
    DEVBUILD: 1,
    RELEASE_DATE: '18/01/2025',
}
export const ANDROID_APP_VERSION = {
    CODE: '0.0.1',
    BUILD: 1,
    DEVBUILD: 1,
    RELEASE_DATE: '18/01/2025',
}

export const APP_VERSION = {
    ...Platform.OS === 'ios' ? IOS_APP_VERSION : ANDROID_APP_VERSION
}