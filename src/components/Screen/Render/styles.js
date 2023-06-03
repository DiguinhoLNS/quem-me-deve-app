import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-safearea-height'
import styled from 'styled-components/native'
import { marginHorizontal, tabbarHeight } from '@styles/layout'
import toPixel from '@utils/toPixel'

export const Wrapper = styled.View`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.align};
    align-items: ${props => props.align && props.align === 'center' ? 'center' : 'flex-start'};
    flex: 1;
    margin-top: ${props => toPixel(props.statusBarMargin ? Platform.OS === 'android' ? getStatusBarHeight() : 0 : 0)};
    padding-bottom: ${props => props.align && props.align === 'center' ? '0px' : props.pad ?? toPixel(tabbarHeight + marginHorizontal)};
    background-color: transparent;
`