import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'

const FlexBox: React.FC <PropsWithChildren> = ({ children }) => {

    return <View>{children}</View>

}

export default FlexBox