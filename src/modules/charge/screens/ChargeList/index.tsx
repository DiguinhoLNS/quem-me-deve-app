import React, { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { useTheme } from '@hooks/useTheme'
import CreateFab from '@modules/charge/components/CreateFAB'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { marginDefault } from '@styles/layout'
import List from './components/List'
import Filter from './components/Filter'
import Overview from './components/Overview'

const ChargeList: React.FC <StackScreenProps<ChargeRouteParams, 'chargeList'>> = props => {

    const [fabExtended, setFabExtended] = useState(true)

    const theme = useTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge
                paddingBottom = {marginDefault + 56}
                onScroll = {({ nativeEvent }) => {
                    const currentScrollPosition = Math.floor(nativeEvent?.contentOffset?.y) ?? 0

                    setFabExtended(currentScrollPosition <= 0)
                }}
            >     
                <Overview />
                <Filter />
                <List {...props} />
            </Render>

            <CreateFab
                extended = {fabExtended}
            />
        </>

    )

}

export default ChargeList