import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppSelector } from '@redux/hooks'

const ChargeDetailsEditDebtor: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetailsEditDebtor'>> = () => {

    const { currentCharge } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const SHOW_DATA = !!currentCharge

    return(

        <>

        </>

    )

}

export default ChargeDetailsEditDebtor