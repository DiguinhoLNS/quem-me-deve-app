import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Section from '@components/Layout/Section'
import Typography from '@components/Typography'
import { NoDataProps } from './types'

const NoData: React.FC <NoDataProps> = ({ icon, emoji, message }) => {

    return(

        <Section center>
            <MaterialCommunityIcons
                name = {icon ?? `emoticon-${emoji}-outline`}
                color = "#6A7178"
                size = {80}
            />
            {message.map((text, index) => <Typography.Text key = {index} style = {{textAlign: 'center'}}>{text}</Typography.Text>)}
        </Section>

    )

}

export default NoData