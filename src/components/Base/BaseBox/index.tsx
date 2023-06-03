import React from 'react'
import Shadow from '@components/Common/Shadow'
import * as S from './styles'
import { BaseBoxProps } from './types'

const BaseBox: React.FC <BaseBoxProps> = ({ children, ...styles }) => {

    return(

        <Shadow>
            <S.BaseBox {...styles}>{children}</S.BaseBox>
        </Shadow>

    )

}

export default BaseBox