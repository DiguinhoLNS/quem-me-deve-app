import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconProps } from './types'

const Icon: React.FC <IconProps> = props => {

    return <MaterialCommunityIcons {...props} />

}

export default Icon