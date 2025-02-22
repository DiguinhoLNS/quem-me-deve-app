import React, { useEffect } from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { getAppLocalData, handleInternetConnection } from '@modules/app/controllers/appController'
import { useAppDispatch } from '@redux/hooks'

const AppRequests: React.FC = () => {

    const dispatch = useAppDispatch()
    
    const netInfo = useNetInfo()

    useEffect(() => {
        getAppLocalData(dispatch)
    }, [dispatch])

    useEffect(() => {
        handleInternetConnection(dispatch, netInfo)
    }, [dispatch, netInfo])

    return null

}

export default AppRequests