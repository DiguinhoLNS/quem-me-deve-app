import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'

const CreateChargeDebtor: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeDebtor'>> = () => {

    return(

        <>
            <Render
                statusBarOptions = {{ barStyle: 'dark-content' }}
                align = "space-between"
            >

            </Render>
        </>

    )

}

export default CreateChargeDebtor