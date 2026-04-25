import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { getChargeOverview } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const Overview: React.FC = () => {

    const { chargeList } = useAppSelector(s => s.charge)
    
    const theme = useTheme()

    const { biggestAmount, biggestDebtor } = getChargeOverview(chargeList)

    return(

        <>
            <Section marginBottom = {marginDefault * 2}>
                <Container marginBottom = {marginDefault} padding = {false}>
                    <Card>
                        <Card.Title
                            title = "Maior valor"
                            left = {props => <Avatar.Icon {...props} icon = "cash" />}
                            right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.error}}>{biggestAmount}</Text>}
                        />
                    </Card>
                </Container>

                <Container padding = {false}>
                    <Card>
                        <Card.Title
                            title = "Maior devedor"
                            subtitle = {biggestDebtor.name}
                            left = {props => <Avatar.Icon {...props} icon = "account-cash" />}
                            right = {() => <Text variant = "titleMedium" style = {{marginRight: 16, color: theme.colors.error}}>{biggestDebtor.amount}</Text>}
                        />
                    </Card>
                </Container>
            </Section>
        </>

    )

}

export default Overview