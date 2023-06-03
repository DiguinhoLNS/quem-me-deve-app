import React from 'react'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import FormLogin from './components/Form'

const Login: React.FC = () => {

    return(

        <>
            <Render align = "space-between">
                <Section>

                </Section>
                <FormLogin />
            </Render>
        </>

    )

}

export default Login