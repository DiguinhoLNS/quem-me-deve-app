import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useTheme } from '@hooks/useTheme'
import { FormInputProps } from './types'

const FormInput: React.FC <FormInputProps> = ({
    label,
    placeholder,
    keyboardType,
    value,
    error = false,
    disabled = false,
    autoCapitalize = "none",
    secure,
    lines,
    right,
    showRight = true,
    onChangeText
}) => {

    const [showSecure, setShowSecure] = useState<boolean | undefined>(secure)

    const theme = useTheme()

    const inputProps = {
        keyboardType: keyboardType ? keyboardType : 'default',
        disabled,
        error,
        secureTextEntry: showSecure,
        multiline: !!lines,
        numberOfLines: lines ?? 1,
        autoCapitalize
    }

    return(

        <>
             <TextInput
                {...inputProps}
                mode = "outlined"
                label = {label}
                placeholder = {placeholder}
                value = {value}
                onChangeText = {onChangeText}
                right = {
                    (!!right && showRight) ? right : (!!secure ? (
                        <TextInput.Icon
                            icon = "eye"
                            color = {showSecure ? undefined : theme.colors.primary}
                            forceTextInputFocus = {true}
                            onPress = {() => setShowSecure(!showSecure)}
                        />
                    ) : !!error ? (
                        <TextInput.Icon
                            icon = "alert-circle"
                            color = {theme.colors.error}
                            forceTextInputFocus = {true}
                        />
                    ) : null)
                }
            />
        </>

    )

}

export default FormInput