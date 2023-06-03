import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import AutoHeightImage from 'react-native-auto-height-image'
import Section from '@components/Layout/Section'
import Spacing from '@components/Layout/Spacing'
import themes from '@styles/themes'
import resetNavigation from '@utils/resetNavigation'
import * as S from './styles'
import { HeaderProps } from './types'

const Header: React.FC <HeaderProps> = ({ backRoute, canGoBack, title, menu, navigation, onPress }) => {

    return(

        <S.Container>
            <Section
                type = "row"
                between = {canGoBack}
                center = {!canGoBack}
                padding = {false}
                wrap = {false}
            >
                {!!canGoBack && (
                    <IconButton
                        icon = "chevron-left"
                        color = "#6A7178"
                        onPress = {() => !!backRoute ? resetNavigation(navigation, backRoute) : navigation.goBack()}
                    />
                ) || <Spacing width = {48} />}

                {title && (
                    <Text style = {{color: themes.typography.title.normal, fontSize: 20, fontWeight: '700'}}>{title}</Text>
                ) || (
                    <AutoHeightImage
                        source = {require('../../../assets/images/logo/logo_tema_horizontal.png')}
                        width = {140}
                    />
                )}
                
                {!!menu ? menu : (!!onPress && (
                    <IconButton
                        icon = "dots-vertical"
                        color = "#6A7178"
                        onPress = {onPress}
                    />
                )) || (!!canGoBack && <Spacing width = {48} />)}
            </Section>
        </S.Container>

    )

}

export default Header