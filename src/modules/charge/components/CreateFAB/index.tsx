import React from 'react'
import { AnimatedFAB } from 'react-native-paper'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { marginDefault } from '@styles/layout'
import { CreateFABProps } from './types'
import { useTheme } from '@hooks/useTheme'

const CreateFab: React.FC <CreateFABProps> = ({ extended }) => {

    const isFocused = useIsFocused()

    const navigation = useNavigation<any>()

    const theme = useTheme()

    return(

        <AnimatedFAB
            icon = "cash-plus"
            label = "Cobrar"
            visible = {isFocused}
            extended = {extended}
            // animateFrom = "right"
            // iconMode = "static"
            color = {theme.colors.onSuccess}
            style = {{
                position: 'absolute',
                bottom: marginDefault,
                right: marginDefault,
                backgroundColor: theme.colors.success
            }}
            onPress = {() => {
                navigation.navigate('createChargeRoutes')
            }}
        />

    )

}

export default CreateFab