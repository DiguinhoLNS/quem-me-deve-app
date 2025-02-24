import React from 'react'
import { Avatar, Card, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { useTheme } from '@hooks/useTheme'
import { getChargeOverview } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'

const UserStatus: React.FC = () => {

    const { chargeList } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const { unpaid } = getChargeOverview(chargeList)

    return(

        <>
            <Section marginBottom = {24}>
                <Card>
                    <Card.Title
                        title = "Cobranças"
                        subtitle = {`Você possui ${chargeList?.filter(f => !f.dtPaid).length ?? 0} cobranças`}
                        left = {props => <Avatar.Icon {...props} icon = "cash" />}
                        right = {() => <Text variant = "titleMedium" style = {{marginRight: 16}}>{unpaid}</Text>}
                    />
                </Card>
            </Section>
        </>

    )

}

export default UserStatus