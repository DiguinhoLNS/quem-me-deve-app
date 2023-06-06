import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import getTheme from '@modules/theme/scripts/getTheme'
import AppRoutes from '@modules/app/routes'
import AppLoader from '@modules/app/components/Loader'
import localUser from '@modules/auth/scripts/local/user'
import AuthRoutes from '@modules/auth/routes'
import AppSafeArea from '@modules/app/components/SafeArea'
import { setAuthLoading } from '@modules/auth/reducers/authReducer'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const Routes: React.FC = () => {

    const dispatch = useAppDispatch()
    const { authLoading, isLogged } = useAppSelector(s => s.auth)

    useEffect(() => {
        (async () => {
            getTheme(dispatch)
            localUser.get(dispatch)

            dispatch(setAuthLoading(false))
        })()
    }, [dispatch])

    if(authLoading) return <AppLoader />
    if(Platform.OS === 'ios'){
        return(
            <AppSafeArea>
                {isLogged ? <AppRoutes /> : <AuthRoutes />}
            </AppSafeArea>
        )
    }
    return isLogged ? <AppRoutes /> : <AuthRoutes />

}

export default Routes