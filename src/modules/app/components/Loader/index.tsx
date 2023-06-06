import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Render from '@components/Screen/Render'
import createScreen from '@modules/app/utils/createScreen'
import { useAppDispatch } from '@redux/hooks'
import { lightTheme } from '@styles/themes'

const AppLoader: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        createScreen(dispatch, {
            statusBarColor: lightTheme.colors.primary,
            navigationBarColor: lightTheme.colors.primary,
            navigatorColor: lightTheme.colors.primary,
        })
    }, [dispatch])

    return(

        <Render
            statusBarOptions = {{ barStyle: 'light-content'}}
            align = "center"
        >
            <ActivityIndicator color = "#fff" size = "large" />
        </Render>

    )

}

export default AppLoader