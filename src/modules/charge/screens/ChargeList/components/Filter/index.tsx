import React from 'react'
import { Chip } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { setChargeFilter } from '@modules/charge/reducers/chargeReducer'
import { marginDefault } from '@styles/layout'

const Filter: React.FC = () => {

    const dispatch = useAppDispatch()
    const { chargeFilter } = useAppSelector(s => s.charge)
    
    const theme = useTheme()

    const filterOptions = [
        { label: 'Todos', icon: 'currency-usd', color: theme.colors.primary},
        { label: 'Pendentes', icon: 'clock-outline', color: theme.colors.warning},
        { label: 'Pagas', icon: 'check', color: theme.colors.success},
    ]

    return(

        <>
            <Container type = "row" marginBottom = {marginDefault} gap = {8}>
                {filterOptions.map((option, index) => (
                    <Chip
                        key = {index}
                        mode = "outlined"
                        // icon = {props => <Icon {...props} source = {option.icon} color = {option.color} />}
                        selected = {chargeFilter === index}
                        selectedColor = {option.color}
                        showSelectedOverlay
                        showSelectedCheck
                        onPress = {() => dispatch(setChargeFilter(index))}
                    >{option.label}</Chip>
                ))}
            </Container>
        </>

    )

}

export default Filter