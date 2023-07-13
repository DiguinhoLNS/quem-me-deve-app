import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@modules/app/reducers/appReducer'
import authReducer from '@modules/auth/reducers/authReducer'
import coreReducer from '@modules/core/reducers/coreReducer'
import themeReducer from '@modules/theme/reducers/themeReducer'
import requestAppReducer from '@modules/app/reducers/requestAppReducer'
import requestCoreReducer from '@modules/core/reducers/requestCoreReducer'
import requestAuthLoginReducer from '@modules/auth/screens/Login/reducers/requestAuthLoginReducer'

const store = configureStore({
    reducer: {
        core: coreReducer,
        requestCore: requestCoreReducer,

        app: appReducer,
        requestApp: requestAppReducer,

        theme: themeReducer,

        auth: authReducer,
        requestAuthLogin: requestAuthLoginReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store