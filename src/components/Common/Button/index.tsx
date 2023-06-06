import React, { useMemo } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Text, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppSelector } from '@redux/hooks'
import layout from '@styles/layout'
import { darkTheme } from '@styles/themes'
import { ButtonProps } from './types'
import { buttonStyles } from './styles'

const Button: React.FC <ButtonProps> = ({
    type = 'default',
    style,
    color,
    labelColor,
    icon,
    label,
    marginHorizontal = false,
    marginBottom,
    disabled,
    loading,
    loadingColor,
    onPress
}) => {

    const { theme } = useAppSelector(s => s.theme)

    const isDefaultTheme = useMemo(() => type === 'default', [theme])

    const textColor = useMemo(() => {
        return !!labelColor ? labelColor : type === 'default' ? darkTheme.typography.text.normal : theme.typography.text.normal
    }, [theme, labelColor])

    const backgroundColor = useMemo(() => {
        return !!color ? color : isDefaultTheme ? theme.colors.primary : 'transparent'
    }, [color, isDefaultTheme, disabled])

    return(
        
        <View
            style={[{
                marginBottom,
                marginHorizontal: marginHorizontal ? layout.marginHorizontal * 2 : 0,
                borderWidth: isDefaultTheme ? 0 : 1,
                borderColor: '#E9ECEF',
                borderRadius: 8,
                backgroundColor,
            }, style]}
        >
            <TouchableRipple
                style={[buttonStyles.touchable, { borderRadius: isDefaultTheme ? 8 : 7 }]}
                borderless={true}
                disabled={disabled}
                onPress={() => !!onPress && onPress()}
            >
                <>
                    {loading && (
                        <ActivityIndicator
                            color = {!!loadingColor ? loadingColor : textColor}
                            size = {20}
                            style = {{marginRight: !!label ? 12 : 0, paddingVertical: 12}}
                        />
                    )}
                    {(!loading && !!icon) && (
                        <MaterialCommunityIcons
                            name = {icon}
                            size = {20}
                            color = {textColor}
                            style = {{marginRight: !!label ? 12 : 0, paddingVertical: 12}}
                        />
                    )}
                    {!!label && (
                        <Text style = {[buttonStyles.label, { color: disabled ? '#FBFBFB' : textColor }]}>{label}</Text>
                    )}
                </>
            </TouchableRipple>
        </View>

    )

}

export default Button