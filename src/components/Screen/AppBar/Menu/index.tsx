import React, { useState } from 'react'
import { Divider, IconButton, Menu } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { getEndpoint } from '@modules/app/utils/endpoints'
import localRemoveUserData from '@modules/auth/scripts/local/user/localRemoveUser'
import { useAppDispatch, useAppSelector } from '@redux/hooks'

const AppBarMenu: React.FC = () => {

    const dispatch = useAppDispatch()
    const { userData, clienteData } = useAppSelector(s => s.auth)
    const { appEndpoints } = useAppSelector(s => s.app)
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation<any>()

    return(

        <Menu
            visible = {visible}
            onDismiss = {() => setVisible(false)}
            anchor = {
                <IconButton
                    icon = "dots-vertical"
                    color = "#64737B"
                    onPress = {() => setVisible(true)}
                />
            }
        >
            <Menu.Item
                title = "Sobre nós"
                onPress = {() => {
                    navigation.navigate('sobreIndex' as any)
                    setVisible(false)
                }}
            />
            <Menu.Item
                title = "Termos de uso"
                onPress = {() => {
                    navigation.navigate('termosIndex' as any)
                    setVisible(false)
                }}
            />
            <Divider />
            <Menu.Item
                title = "Sair"
                onPress = {() => {
                    localRemoveUserData(dispatch, userData!, clienteData!, getEndpoint('confirmarDesconectar', appEndpoints!).url, navigation)
                    setVisible(false)
                }}
            />
        </Menu>

    )

}

export default AppBarMenu