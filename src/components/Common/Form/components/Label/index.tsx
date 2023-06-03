import React from 'react'
import { FormLabelProps } from './types'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import { TypographyElementProps } from '@components/Typography/components/types'
import { status } from '@styles/themes'

const FormLabel: React.FC <Partial<TypographyElementProps> & FormLabelProps> = ({ label, error, ...props }) => {

    const color = error ? status.error.primary : undefined

    return(

        <Container padding = {false}>
            <Typography.Text {...props} style = {[props.style, { color }]}>{label}</Typography.Text>
        </Container>

    )

}

export default FormLabel