import React from 'react'
import moment from 'moment'
import { Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import Container from '@components/Layout/Container'
import ChargeItem from '@modules/charge/components/ChargeItem'
import { setCurrentCharge } from '@modules/charge/reducers/chargeReducer'
import { ChargeRouteParams } from '@modules/charge/routes/Charge/types'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const List: React.FC <StackScreenProps<ChargeRouteParams, 'chargeList'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()

    const { chargeList, chargeFilter } = useAppSelector(s => s.charge)

    const dataList = chargeList?.filter(f => [0, f.dtPaid ? 2 : 1].includes(chargeFilter))
    const dateListDates = [...new Set(dataList?.map(i => moment(i.dtCreated).format("YYYY-MM-DD")))]

    const SHOW_DATA = !!dataList && dataList.length > 0
    const SHOW_NODATA = !dataList || dataList?.length === 0

    return(

        <>
            <Container padding = {false}>
                {SHOW_NODATA && (
                    <Container marginTop = {marginDefault * 4} center>
                        <Text variant = "titleMedium">Nenhuma cobrança!</Text>
                    </Container>
                )}
                {SHOW_DATA && dateListDates.map(date => {
                    const formattedDate = moment(date).format("D [de] MMM [de] YYYY")

                    return (
                        <Container key = {date} marginBottom = {24}>
                            <Text variant = "titleSmall" style = {{marginBottom: 8}}>{formattedDate}</Text>

                            {dataList.reverse().filter(i => moment(i.dtCreated).format("YYYY-MM-DD") === date).map(charge => (
                                <ChargeItem
                                    key = {charge.uuid}
                                    data = {charge}
                                    onPress = {() => {
                                        dispatch(setCurrentCharge(charge))
                                        navigation.navigate("chargeDetails")
                                    }}
                                />
                            ))}
                        </Container>
                    )
                })}
            </Container>
        </>

    )

}

export default List