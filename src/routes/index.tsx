import React from 'react'
import AppRoutes from '@modules/app/routes'
import AppLoader from '@modules/app/components/Loader'
import AuthRoutes from '@modules/auth/routes'
import { useAppSelector } from '@redux/hooks'

const Routes: React.FC = () => {

    const { authLoading, isLogged } = useAppSelector(s => s.auth)

    if(authLoading) return <AppLoader />
    return isLogged ? <AppRoutes /> : <AuthRoutes />

}

export default Routes