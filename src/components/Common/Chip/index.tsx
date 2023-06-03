import React from 'react'
import Typography from '@components/Typography'
import * as S from './styles'
import { ChipProps } from './types'

const Chip: React.FC <ChipProps> = ({ label, color, backgroundColor }) => {

    return(

        <S.LabelBox theme = {backgroundColor}>
            <Typography.Text style = {{color, fontSize: 14}}>{label}</Typography.Text>
        </S.LabelBox>

    )

}

export default Chip