import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { useTheme } from '@hooks/useTheme'
import { getChargeOverview } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const UserStatusData: React.FC = () => {

    const { chargeList } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const { total, paid, unpaid, biggestAmount, biggestDebtor } = getChargeOverview(chargeList)

    return(

        <>
            <Section marginTop = {marginDefault} marginBottom = {24}>
                <Card
                    style = {{marginBottom: marginDefault}}
                >
                    <Card.Title
                        title = "Cobranças"
                        subtitle = {`Você criou ${chargeList?.length ?? 0} cobranças`}
                        left = {props => <Avatar.Icon {...props} icon = "cash" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16}}>{total}</Text>}
                    />
                </Card>

                <Card
                    style = {{marginBottom: marginDefault}}
                >
                    <Card.Title
                        title = "Saldo pendente"
                        left = {props => <Avatar.Icon {...props} icon = "clock-outline" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.warning}}>{unpaid}</Text>}
                    />
                </Card>

                <Card
                    style = {{marginBottom: marginDefault}}
                >
                    <Card.Title
                        title = "Saldo pago"
                        left = {props => <Avatar.Icon {...props} icon = "check" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.success}}>{paid}</Text>}
                    />
                </Card>
            </Section>

            <Section>
                <Card
                    style = {{marginBottom: marginDefault}}
                >
                    <Card.Title
                        title = "Maior valor"
                        left = {props => <Avatar.Icon {...props} icon = "cash" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.error}}>{biggestAmount}</Text>}
                    />
                </Card>

                <Card>
                    <Card.Title
                        title = "Maior devedor"
                        subtitle = {biggestDebtor.name}
                        left = {props => <Avatar.Icon {...props} icon = "account-cash" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.error}}>{biggestDebtor.amount}</Text>}
                    />
                </Card>
            </Section>
        </>

    )

}

export default UserStatusData