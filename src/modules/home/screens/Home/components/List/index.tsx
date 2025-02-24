import React from 'react'
import { Divider, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import ChargeItem from '@modules/charge/components/ChargeItem'
import { setCurrentCharge } from '@modules/charge/reducers/chargeReducer'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const List: React.FC = () => {

    const dispatch = useAppDispatch()
    
    const { chargeList, chargeFilter } = useAppSelector(s => s.charge)

    const SHOW_DATA = !!chargeList && chargeList.length > 0
    const SHOW_NODATA = !chargeList || chargeList.length === 0

    return(

        <>
            <Container>
                {SHOW_NODATA && (
                    <Container marginTop = {marginDefault * 4} center>
                        <Text variant = "titleMedium">Nenhuma cobrança!</Text>
                    </Container>
                )}
                {SHOW_DATA && (
                    <>
                        {chargeList.some(f => f.fixed && !f.dtPaid) && (
                            <Section marginBottom = {marginDefault * 2} padding = {false}>
                                <Container padding = {false}>
                                    <Text variant = "titleSmall" style = {{marginBottom: 8}}>Cobranças fixadas</Text>
                                </Container>

                                {chargeList.filter(f => f.fixed && !f.dtPaid).map(charge => (
                                    <ChargeItem
                                        key = {charge.uuid}
                                        data = {charge}
                                        onPress = {() => {
                                            dispatch(setCurrentCharge(charge))
                                        }}
                                    />
                                ))}
                            </Section>
                        )}

                        {chargeList.some(f => !f.fixed && !f.dtPaid) && (
                            <Section marginBottom = {marginDefault * 2} padding = {false}>
                                <Container padding = {false}>
                                    <Text variant = "titleSmall" style = {{marginBottom: 8}}>Últimas cobranças</Text>
                                </Container>

                                {chargeList.filter(f => !f.fixed && !f.dtPaid).slice(0, 3).map(charge => (
                                    <ChargeItem
                                        key = {charge.uuid}
                                        data = {charge}
                                        onPress = {() => {
                                            dispatch(setCurrentCharge(charge))
                                        }}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                )}
            </Container>
        </>

    )

}

export default List