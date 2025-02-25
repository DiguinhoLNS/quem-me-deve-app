import React, { useRef } from 'react'
import { Card, List } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { useTheme } from '@hooks/useTheme'
import { getChargeTheme } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import { formatDate } from '@utils/format'
import ChargeEditBottomSheet from '../EditBottomSheet'

const ChargeData: React.FC = () => {

    const { currentCharge } = useAppSelector(s => s.charge)
    
    const theme = useTheme()

    const bottomSheetRef = useRef(null)

    const chargeTheme = getChargeTheme(currentCharge!, theme)

    const SHOW_DATA = !!currentCharge

    return(

        <>
            {SHOW_DATA && (
                <>
                    <Section marginBottom = {marginDefault * 2}>
                        <Card
                            onPress = {() => (bottomSheetRef.current as any)!.open()}
                        >
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
                                description = {formatDate(new Date(currentCharge!.dtCreated))}
                                left = {props => <List.Icon {...props} icon = "account" />}
                            />

                            {currentCharge.dtPaid && (
                                <List.Item
                                    title = "Pago em"
                                    description = {formatDate(new Date(currentCharge!.dtPaid))}
                                    left = {props => <List.Icon {...props} icon = "check" />}
                                />
                            )}
                        </Card>
                    </Section>

                    <ChargeEditBottomSheet
                        bottomSheetRef = {bottomSheetRef}
                    />
                </>
            )}
        </>

    )

}

export default ChargeData