import React from 'react'
import { Menu, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Typography from '@components/Typography'
import Container from '@components/Layout/Container'
import { useAppDispatch } from '@redux/hooks'
import * as S from './styles'
import { MenuDropdownProps } from './types'

const MenuDropdown: React.FC <MenuDropdownProps> = ({ children, placeholder, visible, setVisible }) => {

    const dispatch = useAppDispatch()

    return(

        <S.DropdowWrapper>
            <Menu
                contentStyle = {{borderRadius: 8}}
                statusBarHeight = {60}
                visible = {visible}
                onDismiss = {() => dispatch(setVisible(false))}
                anchor = {
                    <TouchableRipple
                        style = {{width: '100%', borderRadius: 8}}
                        borderless = {true}
                        onPress = {() => dispatch(setVisible(true))}
                    >
                        <S.DropdownLabelBox>
                            <Container type = "row" padding = {false} between>
                                <Typography.Text>{!!placeholder ? placeholder : 'Selecionar'}</Typography.Text>
                                <MaterialCommunityIcons name = "chevron-down" color = "#6A7178" size = {24} />
                            </Container>
                        </S.DropdownLabelBox>
                    </TouchableRipple>
                }
            >
                {children}
            </Menu>
        </S.DropdowWrapper>

    )

}

export default MenuDropdown