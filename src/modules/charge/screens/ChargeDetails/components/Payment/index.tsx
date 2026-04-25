import React, { useEffect, useState } from 'react'
import QRCode from "react-native-qrcode-svg"
import { StackScreenProps } from '@react-navigation/stack'
import { List, SegmentedButtons, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { generatePixCode } from '@modules/charge/controllers/chargeController'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import share from '@utils/share'

const ChargePayment: React.FC <StackScreenProps<ChargeRouteParams, 'chargeDetails'>> = ({ navigation }) => {

    const { userData } = useAppSelector(s => s.auth)
    const { currentCharge } = useAppSelector(s => s.charge)
    
    const [index, setIndex] = useState('0')
    const [code, setCode] = useState('')

    const theme = useTheme()

    const SHOW_NODATA = !currentCharge || !userData!.pixKey
    const SHOW_DATA = !!currentCharge && userData!.pixKey

    
    useEffect(() => {
        if(!!userData && !!userData.pixKey && !!currentCharge){
            setCode(generatePixCode(userData!.pixKey!, currentCharge!.amount, 'Rodrigo', 'Sao Paulo'))
        }
    }, [userData, currentCharge])

    return(

        <>
            {SHOW_NODATA && (
                <Section marginTop = {marginDefault * 4} padding = {false} center>
                    <Text variant = "titleMedium" style = {{textAlign: 'center'}}>Nenhuma chave PIX cadastrada pra gerar pagamentos!</Text>
                    <Text
                        variant = "titleMedium"
                        style = {{color: theme.colors.primary}}
                        onPress = {() => navigation.navigate('profileRoutes' as any, { screen: 'profileEdit' })}
                    >Cadastrar chave PIX</Text>
                </Section>
            )}
            {SHOW_DATA && (
                <>
                    <Section marginBottom = {marginDefault}>
                        <SegmentedButtons
                            value = {index}
                            onValueChange = {setIndex}
                            buttons = {[
                                { icon: 'qrcode', label: 'Pix QRCode', value: '0' },
                                { icon: 'key', label: 'Chave Pix', value: '1' },
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
                                    description = {userData!.pixKey}
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