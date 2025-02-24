import React from 'react'
import { Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Divider from '@components/Screen/Divider'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { getChargeOverview } from '@modules/charge/controllers/chargeController'
import { useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import dayMoment from '@utils/dayMoment'
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter'

const UserInfo: React.FC = () => {

    const { userData } = useAppSelector(s => s.auth)
    const { chargeList } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const { total } = getChargeOverview(chargeList)

    return(

        <>
            <Container
                padding = {false}
                style = {{ backgroundColor: theme.colors.primary }}
            >     
                <Container
                    marginTop = {marginDefault}
                    marginBottom = {marginDefault}
                    padding = {false}
                >
                    <Section marginBottom = {marginDefault}>
                        <Text variant = "titleLarge" style = {{color: theme.colors.onPrimary}}>{dayMoment()}</Text>
                        <Text variant = "displayLarge" style = {{color: theme.colors.onPrimary}}>{capitalizeFirstLetter(userData!.login)}</Text>
                    </Section>

                    <Section>
                        <Text style = {{color: theme.colors.onPrimary}}>Saldo pendente</Text>
                        <Text variant = "displaySmall" style = {{color: theme.colors.onPrimary}}>{total}</Text>
                    </Section>
                </Container>
            </Container>

            <Divider />
        </>

    )

}

export default UserInfo