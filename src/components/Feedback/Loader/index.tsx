import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Container from '@components/Layout/Container'
import { LoaderProps } from './types'

const Loader: React.FC <LoaderProps> = props => {

    return(

        <Container {...props} type = "row" padding = {false} center>
            <ActivityIndicator size = {32} />
        </Container>

    )

}

export default Loader