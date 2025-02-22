import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
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