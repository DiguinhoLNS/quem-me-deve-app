import React from 'react'
import RBSheet from "react-native-raw-bottom-sheet"
import { IconButton } from 'react-native-paper'
import Container from '@components/Layout/Container'
import Typography from '@components/Typography'
import { BottomSheetProps } from './types'

const BottomSheet: React.FC <BottomSheetProps> = ({ children, sheetRef, closeOnDragDown = true, height, title, onClose }) => {

    //header height = 25px

    return(

        <RBSheet
            ref = {sheetRef}
            closeOnDragDown = {closeOnDragDown}
            closeOnPressMask = {true}
            onClose = {onClose}
            openDuration = {300}
            closeDuration = {300}
            height = {!!height ? height+25 : undefined}
            customStyles = {{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.4)"
                },
                draggableIcon: {
                    backgroundColor: "#C9C9C9"
                },
                container: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                }
            }}
        >
            {!!title && (
                <Container
                    type = "row"
                    marginTop = {16}
                    marginBottom = {8}
                    between
                >
                    <Typography.Title>{title}</Typography.Title>
                    <IconButton
                        icon = "close"
                        size = {14}
                        color = "#6A7178"
                        onPress = {() => sheetRef.current?.close()}
                    />
                </Container>
            )}
            {children}
        </RBSheet>

    )

}

export default BottomSheet