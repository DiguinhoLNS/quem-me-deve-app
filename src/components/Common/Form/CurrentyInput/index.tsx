import React, { useState } from 'react'
import { FakeCurrencyInput } from 'react-native-currency-input'
import { useTheme } from '@hooks/useTheme'
import { contentWidth } from '@styles/layout'
import { FormCurrentyInputProps } from './types'

const FormCurrentyInput: React.FC <FormCurrentyInputProps> = ({ value, setValue }) => {

    const [focus, setFocus] = useState(false)  

    const theme = useTheme()

    return(

        <>
            <FakeCurrencyInput
                value = {value ?? 0}
                minValue = {0}
                maxValue = {999999}
                keyboardType = 'numeric'
                onFocus = {() => setFocus(true)}
                onBlur = {() => setFocus(false)}
                onChangeValue = {v => setValue(v ?? 0)}
                caretColor = {theme.colors.primary}
                cursorColor = {theme.colors.primary}
                placeholderTextColor = {theme.colors.onSurface}
                prefix = 'R$ '
                precision = {2}
                style = {{
                    width: contentWidth,
                    borderBottomWidth: 2,
                    borderBottomColor: focus ? theme.colors.primary : theme.colors.outline,
                    color: theme.colors.onSurface,
                    fontSize: 40,
                }}
            />
        </>

    )

}

export default FormCurrentyInput