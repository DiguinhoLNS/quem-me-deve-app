import React, { useState } from 'react'
import { Appbar, Menu } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@hooks/useTheme'
import { logout } from '@modules/auth/controllers/authController'
import { useAppTheme } from '@modules/theme/contexts/ThemeContext'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const HeaderMenu: React.FC = () => {

    const dispatch = useAppDispatch()
    const { userData } = useAppSelector(s => s.auth)
    
    const [visible, setVisible] = useState(false)

    const navigation = useNavigation<any>()

    const theme = useTheme()
    const { toggleTheme, isDarkTheme } = useAppTheme()

    const SHOW_AUTHORIZED = !!userData

    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    return(

        <Menu
            visible = {visible}
            onDismiss = {closeMenu}
            anchor = {
                <Appbar.Action
                    icon = "dots-vertical"
                    color = {theme.colors.onPrimary}
                    onPress = {openMenu}
                />
            }
        >
            {!SHOW_AUTHORIZED && (
                <>
                    <Menu.Item
                        leadingIcon = "cog"
                        title = "Configurações"
                        onPress = {() => {
                            closeMenu()

                            navigation.navigate('configurationRoutes')
                        }}
                    />
                </>
            )}
            <Menu.Item
                leadingIcon = {isDarkTheme ? 'white-balance-sunny' : 'moon-waning-crescent'}
                title = "Mudar tema"
                onPress = {() => {
                    closeMenu()

                    toggleTheme()
                }}
            />
            {SHOW_AUTHORIZED && (
                <>
                    <Menu.Item
                        leadingIcon = "logout"
                        title = "Sair"
                        onPress = {() => {
                            closeMenu()

                            logout(dispatch, userData!, navigation as any)
                        }}
                    />
                </>
            )}
        </Menu>

    )

}

export default HeaderMenu