import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'

const CreateChargeResume: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeResume'>> = () => {

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

export default CreateChargeResume