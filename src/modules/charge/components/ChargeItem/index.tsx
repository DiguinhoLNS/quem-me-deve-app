import React, { useState } from 'react'
import { View } from 'react-native'
import { Card, Icon, IconButton, List } from 'react-native-paper'
import { useTheme } from '@hooks/useTheme'
import { checkCharge, deleteCharge, toggleFixedCharge } from '@modules/charge/reducers/chargeReducer'
import { useAppDispatch } from '@redux/hooks'
import { formatDate } from '@utils/format'
import { ChargeItemProps } from './types'

const ChargeItem: React.FC <ChargeItemProps> = ({ data, showActions = true, onPress }) => {

    const dispatch = useAppDispatch()

    const [openOptions, setOpenOptions] = useState(false)

    const theme = useTheme()

    const statusTheme = {
        cardBackgroundColor: data.dtPaid ? theme.colors.successContainer : theme.colors.warningContainer,
        cardColor: data.dtPaid ? theme.colors.onSuccessContainer : theme.colors.onWarningContainer,
        backgroundColor: data.dtPaid ? theme.colors.success : theme.colors.warning,
        color: data.dtPaid ? theme.colors.onSuccess : theme.colors.onWarning,
    }

    return(

        <>
            <Card
                key = {data.uuid}
                style = {{marginBottom: 16}}
                onPress = {() => {
                    onPress()
                    setOpenOptions(false)
                }}
                onLongPress = {() => {
                    setOpenOptions(!openOptions)
                }}
            >
                <Card.Title
                    title = {data.formattedAmount}
                    titleVariant = "titleLarge"
                    titleStyle = {{
                        color: statusTheme.color,
                        fontWeight: 700
                    }}
                    style = {{
                        backgroundColor: statusTheme.backgroundColor,
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 12,
                    }}
                    right = {props => {
                        if(data.fixed) return <View style = {{marginRight: 16}}><Icon {...props} source = "pin" color = {statusTheme.color} size = {16} /></View>
                    }}
                />
                <List.Item
                    title = {data.debtorName}
                    description = {formatDate(new Date(data.dtCreated))}
                    left = {props => <List.Icon {...props} icon = "account" />}
                />
                {(openOptions && showActions) && (
                    <Card.Actions>
                        <IconButton
                            mode = "contained"
                            icon = "delete"
                            iconColor = {theme.colors.onErrorContainer}
                            style = {{ backgroundColor: theme.colors.errorContainer }}
                            onPress = {() => {
                                dispatch(deleteCharge(data.uuid))

                                setOpenOptions(false)
                            }}
                        />
                        <IconButton
                            mode = "contained"
                            icon = {data.fixed ? "pin-off" : "pin"}
                            onPress = {() => {
                                dispatch(toggleFixedCharge(data.uuid))

                                setOpenOptions(false)
                            }}
                        />
                        <IconButton
                            mode = "contained"
                            icon = "share-variant"
                            onPress = {() => {
                                setOpenOptions(false)
                            }}
                        />
                        {!data.dtPaid && (
                            <IconButton
                                mode = "contained"
                                icon = "cash-check"
                                iconColor = {theme.colors.onSuccessContainer}
                                style = {{ backgroundColor: theme.colors.successContainer }}
                                onPress = {() => {
                                    dispatch(checkCharge(data.uuid))

                                    setOpenOptions(false)
                                }}
                            />
                        )}
                    </Card.Actions>
                )}
            </Card>
        </>

    )

}

export default ChargeItem