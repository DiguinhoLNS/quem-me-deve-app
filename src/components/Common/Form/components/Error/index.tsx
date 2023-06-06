import React from 'react'
import { Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { SectionProps } from '@components/Layout/Section/types'
import { FormErrorProps } from './types'
import { useAppSelector } from '@redux/hooks'

const FormError: React.FC <FormErrorProps & Partial<SectionProps>> = ({ visible, message, ...props }) => {

    const { theme } = useAppSelector(s => s.theme)

    const sectionStyles = { ...props }

    return(

        <>
            {visible && (
                <Section {...sectionStyles} type = "row" center>
                    <Text style = {{color: theme.status.error.primary, fontSize: 14, fontWeight: 'bold'}}>{message}</Text>
                </Section>
            )}
        </>

    )

}

export default FormError