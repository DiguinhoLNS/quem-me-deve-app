import React from 'react'
import { useTheme } from '@hooks/useTheme'
import * as S from './styles'
import { DividerProps } from './types'

const Divider: React.FC <DividerProps> = ({ innerColor, backgroundColor }) => {

    const { colors } = useTheme()

    return(

        <S.Container style = {{backgroundColor: innerColor ?? colors.primary}}>
            <S.Content style = {{backgroundColor: backgroundColor ?? colors.surface}} />
        </S.Container>

    )

}

export default Divider