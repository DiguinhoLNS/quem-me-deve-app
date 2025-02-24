import React from 'react'
import { Text, TouchableRipple } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { setChargeFilter } from '@modules/charge/reducers/chargeReducer'
import { getChargeOverview } from '@modules/charge/controllers/chargeController'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import * as S from './styles'

const Overview: React.FC = () => {

    const dispatch = useAppDispatch()
    const { chargeList } = useAppSelector(s => s.charge)

    const theme = useTheme()

    const { total, unpaid, paid } = getChargeOverview(chargeList)

    return(

        <>
            <Section marginBottom = {marginDefault} padding = {false}>
                <S.Wrapper
                    style = {{backgroundColor: theme.colors.primary}}
                >
                    <Container>
                        <Text style = {{color: theme.colors.onPrimary}}>Total</Text>
                        <Text variant = "displaySmall" style = {{color: theme.colors.onPrimary}}>{total}</Text>
                    </Container>

                    <Container type = "row" padding = {false} between>
                        <TouchableRipple
                            style = {{width: '50%', borderTopLeftRadius: 16}}
                            borderless
                            onPress = {() => dispatch(setChargeFilter(1))}
                        >
                            <S.StatusBox
                                style = {{backgroundColor: theme.colors.warning, borderTopLeftRadius: 16}}
                            >
                                <Text style = {{color: theme.colors.onWarning}}>Pendentes</Text>
                                <Text variant = "headlineSmall" style = {{color: theme.colors.onWarning}}>{unpaid}</Text>
                            </S.StatusBox>
                        </TouchableRipple>
                        
                        <TouchableRipple
                            style = {{width: '50%', borderTopRightRadius: 16}}
                            borderless
                            onPress = {() => dispatch(setChargeFilter(2))}
                        >
                            <S.StatusBox
                                style = {{backgroundColor: theme.colors.success, borderTopRightRadius: 16}}
                            >
                                <Text style = {{color: theme.colors.onSuccess}}>Pagas</Text>
                                <Text variant = "headlineSmall" style = {{color: theme.colors.onSuccess}}>{paid}</Text>
                            </S.StatusBox>
                        </TouchableRipple>
                    </Container>
                </S.Wrapper>
            </Section>
        </>

    )

}

export default Overview