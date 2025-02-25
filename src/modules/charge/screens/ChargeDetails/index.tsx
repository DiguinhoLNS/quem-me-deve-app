import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Divider from '@components/Screen/Divider'
import { useTheme } from '@hooks/useTheme'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppSelector } from '@redux/hooks'
import ChargeFAB from './components/FAB'
import ChargeData from './components/Data'
import ChargePayment from './components/Payment'

const ChargeDetails: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetails'>> = props => {

    const { currentCharge } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const SHOW_DATA = !!currentCharge

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {props.navigation.getState()?.index === 1}
            >
                {SHOW_DATA && (
                    <>
                        <Divider />

                        <ChargeData {...props} />
                        <ChargePayment {...props} />
                    </>
                )}
            </Render>

            <ChargeFAB />
        </>

    )

}

export default ChargeDetails