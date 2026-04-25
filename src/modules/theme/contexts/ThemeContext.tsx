import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeType } from '@interfaces/ThemeType'
import themePalettes from '@modules/theme/constants/palette'
import storage from '@utils/storage'
import { createTheme } from '../controllers/themeController'
import { ThemePalette } from '../interfaces/Palette'
import { ThemeContextType } from '../interfaces/ThemeContext'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useAppTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}

export const ThemeProvider: React.FC <PropsWithChildren> = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
    const [palette, setPalette] = useState<ThemePalette>('blue')

    const currentPalette = createTheme(isDarkTheme, themePalettes[palette][isDarkTheme ? 'dark' : 'light'])

    useEffect(() => {
        const theme = storage.getItem<ThemeType>('themeType')
        const palette = storage.getItem<ThemePalette>('palette')

        if(theme){
            setIsDarkTheme(theme === 'dark')
        }

        if(palette){
            setPalette(palette)
        }
    }, [setPalette, setIsDarkTheme])

    const toggleTheme = () => {
        const newIsDarkTheme = !isDarkTheme
        
        storage.setItem('themeType', newIsDarkTheme ? 'dark' : 'light')
        setIsDarkTheme(newIsDarkTheme)
    }

    const togglePalette = (palette: ThemePalette) => {
        storage.setItem('themePalette', palette)
        setPalette(palette)
    }

    return(

        <ThemeContext.Provider value = {{ isDarkTheme, toggleTheme, palette, togglePalette }}>
            <PaperProvider theme = {currentPalette}>{children}</PaperProvider>
        </ThemeContext.Provider>

    )

}