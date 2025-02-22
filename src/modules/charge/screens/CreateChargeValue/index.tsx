import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Container from '@components/Layout/Container'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { marginDefault } from '@styles/layout'
import Form from './components/Form'

const CreateChargeValue: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeValue'>> = props => {

    return(

        <>
            <Render
                statusBarOptions = {{ barStyle: 'dark-content' }}
                align = "space-between"
            >
                <Form {...props} />
            </Render>
        </>

    )

}

export default CreateChargeValue