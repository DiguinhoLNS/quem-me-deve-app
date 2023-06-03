import React from 'react'
import { Text } from 'react-native-paper'
import { APP_VERSION } from '@components/config'
import Section from '@components/Layout/Section'

const AppVersion: React.FC = () => {

    return(

        <Section center padding = {false}>
            <Text style = {{color: '#333333', fontSize: 12, fontWeight: 'bold'}}>{APP_VERSION}</Text>
        </Section>

    )

}

export default AppVersion