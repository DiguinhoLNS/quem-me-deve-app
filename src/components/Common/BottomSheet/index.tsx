import React from 'react'
import RBSheet from "react-native-raw-bottom-sheet"
import { IconButton, Text } from 'react-native-paper'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { marginDefault } from '@styles/layout'
import { BottomSheetProps } from './types'

const BottomSheet: React.FC <BottomSheetProps> = ({ children, sheetRef, closeOnDragDown = true, height, title, onClose }) => {

    //header height = 25px

    const theme = useTheme()

    return(

        <RBSheet
            ref = {sheetRef}
            // closeOnDragDown = {closeOnDragDown}
            closeOnPressMask = {true}
            onClose = {onClose}
            openDuration = {300}
            closeDuration = {300}
            height = {!!height ? height+25 : undefined}
            customStyles = {{
                wrapper: {
                    backgroundColor: theme.colors.backdrop,
                },
                draggableIcon: {
                    backgroundColor: theme.colors.onSurface
                },
                container: {
                    paddingVertical: marginDefault,
                    paddingBottom: marginDefault * 2,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    backgroundColor: theme.colors.surface,
                }
            }}
        >
            {!!title && (
                <Container
                    type = "row"
                    marginBottom = {marginDefault}
                    between
                >
                    <Text variant = "titleLarge" style = {{color: theme.colors.onSurface}}>{title}</Text>
                    <IconButton
                        icon = "close"
                        size = {24}
                        iconColor = {theme.colors.onSurface}
                        onPress = {() => sheetRef.current?.close()}
                    />
                </Container>
            )}
            {children}
        </RBSheet>

    )

}

export default BottomSheet