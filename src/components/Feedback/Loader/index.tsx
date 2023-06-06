import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Container from '@components/Layout/Container'
import { useAppSelector } from '@redux/hooks'

const Loader: React.FC = () => {

    const { theme } = useAppSelector(s => s.theme)

    return(

        <Container type = "row" padding = {false} center>
            <ActivityIndicator size = {32} color = {theme.colors.primary} />
        </Container>

    )

}

export default Loader