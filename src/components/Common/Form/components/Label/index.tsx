import React from 'react'
import { FormLabelProps } from './types'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import { TypographyElementProps } from '@components/Typography/components/types'
import { useAppSelector } from '@redux/hooks'

const FormLabel: React.FC <Partial<TypographyElementProps> & FormLabelProps> = ({ label, error, ...props }) => {

    const { theme } = useAppSelector(s => s.theme)

    const color = error ? theme.status.error.primary : undefined

    return(

        <Container padding = {false}>
            <Typography.Text {...props} style = {[props.style, { color }]}>{label}</Typography.Text>
        </Container>

    )

}

export default FormLabel