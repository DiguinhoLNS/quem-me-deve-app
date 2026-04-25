import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import { getContacts } from '@modules/core/controllers/coreController'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { useAppDispatch } from '@redux/hooks'
import ContactFilter from './components/ContactFilter'

const CreateChargeDebtor: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeDebtor'>> = props => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        getContacts(dispatch)
    }, [])

    return(

        <>
            <Render
                statusBarOptions = {{ barStyle: 'dark-content' }}
                align = "space-between"
            >
                <ContactFilter {...props} />
            </Render>
        </>

    )

}

export default CreateChargeDebtor