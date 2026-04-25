import React from 'react'
import { SegmentedButtons } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import themePalettes from '@modules/theme/constants/palette'
import { useAppTheme } from '@modules/theme/contexts/ThemeContext'
import { ConfigurationRouteParams } from '@modules/configuration/routes/types'
import { marginDefault } from '@styles/layout'
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
                <Section marginTop = {marginDefault}>
                    <SegmentedButtons
                        value = {isDarkTheme ? 'dark' : 'light'}
                        onValueChange = {() => toggleTheme()}
                        buttons = {[
                            { icon: 'white-balance-sunny', label: 'Claro', value: 'light' },
                            { icon: 'moon-waning-crescent', label: 'Escuro', value: 'dark' },
                        ]}
                    />
                </Section>

                <Section padding = {false}>
                    <Container type = "row" gap = {marginDefault} marginTop = {marginDefault} center wrap>
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