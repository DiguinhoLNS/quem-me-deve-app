import React from 'react'
import { List } from 'react-native-paper'
import { useTheme } from '@hooks/useTheme'
import { ContactItemProps } from './types'

const ContactItem: React.FC <ContactItemProps> = ({ onPress, selected, label, description }) => {

    const theme = useTheme()

    return(

        <List.Item
            title = {label}
            description = {description}
            onPress = {onPress}
            onLongPress = {onPress}
            left = {props => (
                <List.Icon
                    {...props}
                    icon = {selected ? "account-check" : "account"}
                    color = {selected ? theme.colors.success : theme.colors.primary}
                />
            )}
        />

    )

}

export default ContactItem