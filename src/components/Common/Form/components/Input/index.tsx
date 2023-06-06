import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-paper'
import TextInputMask from 'react-native-text-input-mask'
import FormLabel from '../Label'
import { FormInputProps } from './types'
import { useAppSelector } from '@redux/hooks'

const FormInput: React.FC <FormInputProps> = ({
    field,
    mode,
    label,
    placeholder,
    keyboardType,
    value,
    error,
    editable,
    secure,
    mask,
    maskReturn = 'formatted',
    lines,
    right,
    style,
    onChange
}) => {

    const { theme } = useAppSelector(s => s.theme)

    const inputRef = useRef(null)
    const [showSecure, setShowSecure] = useState<boolean | undefined>(secure)

    const inputProps = {
        ref: inputRef,
        keyboardType: keyboardType ? keyboardType : 'default',
        theme: {
            colors: {
                primary: theme.colors.primary,
                background: '#FFFFFF',
                placeholder: '#6A7178',
                text: theme.typography.text.normal,
            },
            roundness: 12,
        },
        selectionColor: theme.colors.primary,
        outlineColor: '#ADB5BD',
        editable: editable ?? true,
        error: !!error ?? false,
        secureTextEntry: showSecure,
        multiline: lines ? true : false,
        numberOfLines: lines ? lines : 1,
    }

    const handleChangeText = (text: string) => {
        onChange(field, text)
    }

    return(

        <>
            {!!label && <FormLabel label = {label} error = {!!error} />}
            {mask ? (
                <TextInput
                    {...inputProps}
                    mode = {mode ?? 'outlined'}
                    //label = {label}
                    autoCapitalize = 'none'
                    placeholder = {placeholder}
                    value = {value}
                    render = {props => (
                        <TextInputMask
                            {...props}
                            ref = {inputRef}
                            mask = {mask}
                            value = {value}
                            onChangeText = {(formatted, extracted) => {
                                if(maskReturn === 'formatted'){
                                    props.onChangeText?.(formatted ?? ''),
                                    handleChangeText(formatted ?? '')
                                }else{
                                    props.onChangeText?.(extracted ?? ''),
                                    handleChangeText(extracted ?? '')
                                }
                            }}
                        />
                    )}
                />
            ) : (
                <TextInput
                    {...inputProps}
                    mode = {mode ?? 'outlined'}
                    //label = {label}
                    autoCapitalize = 'none'
                    placeholder = {placeholder}
                    value = {value}
                    onChangeText = {text => handleChangeText(text)}
                    right = {
                        !!right ? right : (!!secure ? (
                            <TextInput.Icon
                                icon = "eye-outline"
                                color = {error ? theme.status.error.primary : showSecure ? '#ADB5BD' : theme.colors.primary}
                                forceTextInputFocus = {false}
                                onPress = {() => setShowSecure(!showSecure)}
                            />
                        ) : !!error ? (
                            <TextInput.Icon
                            icon = "alert-circle"
                                color = {theme.status.error.primary}
                                forceTextInputFocus = {false}
                            />
                        ) : null)
                    }
                />
            )}
        </>

    )

}

export default FormInput