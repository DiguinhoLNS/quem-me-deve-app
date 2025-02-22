import React from 'react'
import { View } from 'react-native'
import { SpacingProps } from './types'

const Spacing: React.FC <SpacingProps> = ({ width, height }) => {
    return <View style = {{width, height}} />
}

export default Spacing