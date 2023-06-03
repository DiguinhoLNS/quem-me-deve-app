import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import themes from '@styles/themes'
import { TypographyElementProps, TypographyLinkProps } from './types'

const { text, title, link } = themes.typography

export const TypographyNativeText: React.FC <TypographyElementProps> = ({ children, style }) => {

    return <Text style = {[style]}>{children}</Text>

}

export const TypographyLink: React.FC <TypographyElementProps & TypographyLinkProps> = ({ children, style, ...touchableProps }) => {

    return(

        <TouchableOpacity {...touchableProps} style = {touchableProps.touchableStyle}>
            <Text style = {[{color: touchableProps.disabled ? themes.button.disabled : link}, style]}>{children}</Text>
        </TouchableOpacity>

    )

}

export const TypographyText: React.FC <TypographyElementProps> = ({ children, style, theme = 'normal' }) => {

    return <Text style = {[{color: text[theme]}, style]}>{children}</Text>

}

export const TypographyTitle: React.FC <TypographyElementProps> = ({ children, style, theme = 'normal' }) => {

    return <Text style = {[{color: title[theme], fontSize: 20, fontWeight: '700'}, style]}>{children}</Text>

}