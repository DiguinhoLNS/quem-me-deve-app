import React from 'react'
import { Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { APP_VERSION } from '@config/index'

const AppVersion: React.FC = () => {

    return(

        <Section center padding = {false}>
            <Text variant = "labelSmall">{APP_VERSION.CODE}</Text>
        </Section>

    )

}

export default AppVersion