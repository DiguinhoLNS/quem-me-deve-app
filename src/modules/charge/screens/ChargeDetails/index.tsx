import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Divider from '@components/Screen/Divider'
import { useTheme } from '@hooks/useTheme'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppSelector } from '@redux/hooks'
import ChargeFAB from './components/FAB'
import ChargeData from './components/Data'
import ChargePayment from './components/Payment'

const ChargeDetails: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetails'>> = () => {

    const { currentCharge } = useAppSelector(s => s.charge)

    const navigation = useNavigation()

    const theme = useTheme()

    const SHOW_DATA = !!currentCharge

    useEffect(() => {
        
    })

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {navigation.getState()?.index === 1}
            >
                {SHOW_DATA && (
                    <>
                        <Divider />

                        <ChargeData />
                        <ChargePayment />
                    </>
                )}
            </Render>

            <ChargeFAB />
        </>

    )

}

export default ChargeDetails