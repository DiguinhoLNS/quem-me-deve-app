import React from 'react'
import { Avatar, Divider, IconButton, List, SegmentedButtons, TouchableRipple } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import ScreenDivider from '@components/Screen/Divider'
import { useTheme } from '@hooks/useTheme'
import { useAppTheme } from '@modules/theme/contexts/ThemeContext'
import { ConfigurationRouteParams } from '@modules/configuration/routes/types'
import { marginHorizontal } from '@styles/layout'
import themePalettes from '@modules/theme/constants/palette'
import { ThemePalette } from '@modules/theme/interfaces/Palette'
import PaletteSelector from './components/PaletteSelector'

const ConfigurationTheme: React.FC <StackScreenProps<ConfigurationRouteParams, 'configurationTheme'>> = () => {

    const theme = useTheme()

    const { toggleTheme, isDarkTheme, palette, togglePalette } = useAppTheme()

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
            >
                <ScreenDivider />

                <Section>
                    <SegmentedButtons
                        value = {isDarkTheme ? 'dark' : 'light'}
                        onValueChange = {v => toggleTheme()}
                        buttons = {[
                            { icon: 'white-balance-sunny', label: 'Claro', value: 'light' },
                            { icon: 'moon-waning-crescent', label: 'Escuro', value: 'dark' },
                        ]}
                    />
                </Section>

                <Section padding = {false}>

                    {/* <Container marginTop = {marginHorizontal}>
                        <SegmentedButtons
                            value = {palette}
                            onValueChange = {v => togglePalette(v as ThemePalette)}
                            buttons = {Object.keys(themePalettes).map(key => ({
                                icon: 'palette',
                                checkedColor: themePalettes[key as ThemePalette][isDarkTheme ? 'dark' : 'light'].primary,
                                uncheckedColor: themePalettes[key as ThemePalette][isDarkTheme ? 'dark' : 'light'].primary,
                                label: '',
                                value: key
                            }))}
                        />
                    </Container> */}

                    <Container type = "row" gap = {marginHorizontal} marginTop = {marginHorizontal} center wrap>
                        {Object.keys(themePalettes).map((key, index) => (
                            <PaletteSelector
                                key = {index}
                                selected = {palette === key}
                                theme = {themePalettes[key as ThemePalette][isDarkTheme ? 'dark' : 'light']}
                                onPress = {() => togglePalette(key as ThemePalette)}
                            />
                        ))}
                    </Container>
                </Section>
            </Render>
        </>

    )

}

export default ConfigurationTheme