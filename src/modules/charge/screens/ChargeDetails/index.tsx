import React from 'react'
import { Card, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Divider from '@components/Screen/Divider'
import { useTheme } from '@hooks/useTheme'
import { getChargeTheme } from '@modules/charge/controllers/chargeController'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { formatDate } from '@utils/format'
import { marginDefault } from '@styles/layout'
import ChargeFAB from './components/FAB'

const ChargeDetails: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetails'>> = () => {

    const { currentCharge } = useAppSelector(s => s.charge)

    const navigation = useNavigation()

    const theme = useTheme()

    const SHOW_DATA = !!currentCharge

    const chargeTheme = getChargeTheme(currentCharge!, theme)

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge = {navigation.getState()?.index === 1}
            >
                {SHOW_DATA && (
                    <>
                        <Divider />

                        <Section marginBottom = {marginDefault * 2}>
                            <Card>
                                <Card.Title
                                    title = {currentCharge.formattedAmount}
                                    titleVariant = "headlineLarge"
                                    titleStyle = {{
                                        color: chargeTheme.color,
                                        fontWeight: 700,
                                        paddingVertical: 30
                                    }}
                                    style = {{
                                        backgroundColor: chargeTheme.background,
                                        borderTopRightRadius: 12,
                                        borderTopLeftRadius: 12,
                                    }}
                                />

                                <List.Item
                                    title = {currentCharge.debtorName}
                                    description = {formatDate(new Date(currentCharge.dtCreated))}
                                    left = {props => <List.Icon {...props} icon = "account" />}
                                />
                            </Card>
                        </Section>
                    </>
                )}
            </Render>

            <ChargeFAB />
        </>

    )

}

export default ChargeDetails