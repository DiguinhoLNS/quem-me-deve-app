import React from 'react'
import { Text, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Shadow from '../Shadow'
import * as S from './styles'
import { BoxProps } from './types'

const Box: React.FC <BoxProps> = ({ title, description, date, done, onPress }) => {

    return(

        <Shadow>
            <S.Box>
                <TouchableRipple
                    style = {{width: '100%', borderRadius: 8}}
                    borderless = {true}
                    onPress = {onPress}
                >
                    <S.BoxContainer>
                        <S.TextContainer>
                            <Text style = {{color: '#223843E3'}}>{title}</Text>
                            <Text style = {{color: '#22384380'}}>{description}</Text>
                            <Text style = {{color: '#22384380'}}>{date}</Text>
                        </S.TextContainer>
                        {!!done && (
                            <S.IconContainer>
                                <MaterialCommunityIcons
                                    name = "check"
                                    size = {24}
                                    color = "#01D009"
                                />
                            </S.IconContainer>
                        )}
                    </S.BoxContainer>
                </TouchableRipple>
            </S.Box>
        </Shadow>

    )

}

export default Box