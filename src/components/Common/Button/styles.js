import { StyleSheet } from "react-native"
import styled from 'styled-components/native'

export const buttonStyles = StyleSheet.create({
    gradient: {
        borderRadius: 8,
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    label: {
        paddingVertical: 14,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    }
})