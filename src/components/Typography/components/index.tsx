import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { useAppSelector } from '@redux/hooks'
import { TypographyElementProps, TypographyLinkProps } from './types'

export const TypographyNativeText: React.FC <TypographyElementProps> = ({ children, style }) => {

    return <Text style = {[style]}>{children}</Text>

}

export const TypographyLink: React.FC <TypographyElementProps & TypographyLinkProps> = ({ children, style, ...touchableProps }) => {

    return(

        <TouchableOpacity {...touchableProps} style = {touchableProps.touchableStyle}>
            <Text style = {[style]}>{children}</Text>
        </TouchableOpacity>

    )

}

export const TypographyText: React.FC <TypographyElementProps> = ({ children, style, theme = 'normal' }) => {

    const { typography } = useAppSelector(s => s.theme.theme)

    return <Text style = {[{color: typography.text[theme]}, style]}>{children}</Text>

}

export const TypographyTitle: React.FC <TypographyElementProps> = ({ children, style, theme = 'normal' }) => {

    const { typography } = useAppSelector(s => s.theme.theme)

    return <Text style = {[{color: typography.text[theme], fontSize: 20, fontWeight: '700'}, style]}>{children}</Text>

}