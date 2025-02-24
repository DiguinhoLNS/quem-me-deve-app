import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from '@modules/app/reducers/appReducer'
import authReducer from '@modules/auth/reducers/authReducer'
import coreReducer from '@modules/core/reducers/coreReducer'
import chargeReducer from '@modules/charge/reducers/chargeReducer'
import requestAuthReducer from '@modules/auth/reducers/requestAuthReducer'
import createChargeReducer from '@modules/charge/reducers/createChargeReducer'

const defaultReducer = combineReducers({
    app: appReducer,

    auth: authReducer,
    requestAuth: requestAuthReducer,

    core: coreReducer,

    charge: chargeReducer,
    createCharge: createChargeReducer,
    
})

const rootReducer = (state: any, action: any) => {
    if(action.type === 'app/resetAll'){
        state = undefined
    }
    return defaultReducer(state, action)
}

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store