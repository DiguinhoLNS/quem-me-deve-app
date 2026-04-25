import React, { useEffect } from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import { localCharge } from '@modules/charge/controllers/chargeController'
import { getAppLocalData, handleInternetConnection } from '@modules/app/controllers/appController'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const AppRequests: React.FC = () => {

    const dispatch = useAppDispatch()
    const { chargeList } = useAppSelector(s => s.charge)
    
    const netInfo = useNetInfo()

    useEffect(() => {
        getAppLocalData(dispatch)
        localCharge.get(dispatch)
    }, [])

    useEffect(() => {
        handleInternetConnection(dispatch, netInfo)
    }, [netInfo])

    useEffect(() => {
        if(chargeList){
            localCharge.set(dispatch, chargeList)
        }
    }, [chargeList])

    return null

}

export default AppRequests