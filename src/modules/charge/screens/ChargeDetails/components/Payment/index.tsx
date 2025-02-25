import React, { useState } from 'react'
import QRCode from "react-native-qrcode-svg"
import { List, SegmentedButtons } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { generatePixCode } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import share from '@utils/share'
import { useTheme } from '@hooks/useTheme'

const ChargePayment: React.FC = () => {

    const { currentCharge } = useAppSelector(s => s.charge)
    
    const [index, setIndex] = useState('0')

    const theme = useTheme()

    const SHOW_DATA = !!currentCharge

    const code = generatePixCode('6ac2da32-84f2-430b-aa1b-f861597d64bc', currentCharge!.amount, 'Rodrigo', 'Sao Paulo')

    return(

        <>
            {SHOW_DATA && (
                <>
                    <Section marginBottom = {marginDefault}>
                        <SegmentedButtons
                            value = {index}
                            onValueChange = {setIndex}
                            buttons = {[
                                { icon: 'qrcode', label: 'Pix QRCode', value: '0' },
                                { icon: 'content-copy', label: 'Chave Pix', value: '1' },
                            ]}
                        />
                    </Section>

                    <Section padding = {false}>
                        {index === '0' && (
                            <Container center>
                                <QRCode
                                    value = {code}
                                    size = {240}
                                    backgroundColor = {theme.colors.surface}
                                    color = {theme.colors.onSurface}
                                />
                            </Container>
                        ) || (
                            <Container padding = {false}>
                                <List.Item
                                    title = "Chave Pix"
                                    description = "6ac2da32-84f2-430b-aa1b-f861597d64bc"
                                    left = {props => <List.Icon {...props} icon = "content-copy" />}
                                    onPress = {() => share.copy(code)}
                                />
                            </Container>
                        )}
                    </Section>
                </>
            )}
        </>

    )

}

export default ChargePayment