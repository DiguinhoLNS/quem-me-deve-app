import React from 'react'
import { IconButton } from 'react-native-paper'
import AutoHeightImage from 'react-native-auto-height-image'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { StackHeaderProps } from '@react-navigation/stack'
import { width } from '@styles/layout'
import * as S from './styles'
import AppBarMenu from './Menu'

const AppBar: React.FC <BottomTabHeaderProps | StackHeaderProps> = ({ navigation }) => {

    return(

        <S.AppBarContainer>
            <AutoHeightImage
                source = {require('../../assets/images/topbar.png')}
                width = {width}
            >
                <S.AppBarContent>
                    <IconButton
                        icon = "arrow-left"
                        color = "#970E0F"
                        onPress = {() => navigation.goBack()}
                    />
                    <AutoHeightImage
                        source = {require('../../assets/images/logoVermelho.png')}
                        width = {100}
                    />
                    <AppBarMenu />
                </S.AppBarContent>
            </AutoHeightImage>
        </S.AppBarContainer>

    )

}

export default AppBar