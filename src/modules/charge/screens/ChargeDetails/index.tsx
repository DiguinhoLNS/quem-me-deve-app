import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'

const ChargeDetails: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetails'>> = () => {

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge
            >
                
            </Render>
        </>

    )

}

export default ChargeDetails