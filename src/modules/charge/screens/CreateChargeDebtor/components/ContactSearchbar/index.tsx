import React from 'react'
import { TextInput } from 'react-native-paper'
import Section from '@components/Layout/Section'
import FormInput from '@components/Common/Form/Input'
import { useTheme } from '@hooks/useTheme'
import { ContactSearchbarProps } from './types'

const ContactSearchbar: React.FC <ContactSearchbarProps> = ({ value, setValue, onCreate }) => {

    const theme = useTheme()

    return(

        <>
            <Section>
                <FormInput
                    label = "Digite o nome"
                    autoCapitalize = "words"
                    value = {value}
                    onChangeText = {setValue}
                    showRight = {value.length > 0}
                    right = {
                        <TextInput.Icon
                            icon = "account-plus"
                            color = {theme.colors.primary}
                            onPress = {onCreate}
                        />
                    }
                />
            </Section>
        </>

    )

}

export default ContactSearchbar