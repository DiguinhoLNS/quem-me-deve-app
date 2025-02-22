import React from 'react'
import { Icon, TouchableRipple } from 'react-native-paper'
import * as S from './styles'
import { PaletteSelectorProps } from './types'

const PaletteSelector: React.FC <PaletteSelectorProps> = ({ theme, selected, onPress }) => {

    return(

        <>
            <TouchableRipple
                borderless = {true}
                style = {{ borderRadius: 16 }}
                onPress = {onPress}
            >
                <S.Box
                    style = {{ backgroundColor: theme.surfaceVariant }}
                >
                    {selected && (
                        <S.IconWrapper
                            style = {{backgroundColor: theme.primaryContainer}}
                        >
                            <Icon
                                source = "check"
                                size = {16}
                                color = {theme.onPrimaryContainer}
                            />
                        </S.IconWrapper>
                    )}

                    <S.Group>
                        <S.Theme1
                            style = {{backgroundColor: theme.primary}}
                        />
                        <S.Theme2
                            style = {{backgroundColor: theme.primaryContainer}}
                        />
                        <S.Theme3
                            style = {{backgroundColor: theme.inversePrimary}}
                        />
                    </S.Group>
                </S.Box>
            </TouchableRipple>
        </>

    )

}

export default PaletteSelector