import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Container from '@components/Layout/Container'
import themes from '@styles/themes'

const Loader: React.FC = () => {

    return(

        <Container type = "row" padding = {false} center>
            <ActivityIndicator size = {32} color = {themes.colors.primary} />
        </Container>

    )

}

export default Loader