import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const formSelectStyles = StyleSheet.create({
    label: {
        flexShrink: 1,
        color: "#ADB5BD",
        fontSize: 16,
    },
    dialog: {
        maxHeight: '60%',
        borderRadius: 16
    },
    dialogScrollArea: {
        padding: 0,
        marginBottom: 16
    },
    dialogScrollView: {
        padding: 0,
    },
})

export const SelectTouchable = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    padding: 8px 12px;
    border-width: 1px;
    //border-color: ${props => !!props.error ? themes.status.error.primary : props.active ? themes.colors.primary : "#ADB5BD"};
    border-radius: 12px;
    background-color: #FFF;
`