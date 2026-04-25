import styled from 'styled-components/native'
import { marginDefault } from '@styles/layout'
import toPixel from '@utils/toPixel'

export const ContainerRow = styled.View`
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    flex-direction: row;
    justify-content: ${props => props.between ? 'space-between' : props.center ? 'center' : 'flex-start'};
    align-items: center;
    width: ${props => props.wid};
    padding: 0px ${props => toPixel(!!props.pad ? marginDefault : 0)};
    margin-top: ${props => toPixel(props.marginTop ?? 0)};
    margin-bottom: ${props => toPixel(props.marginBottom ?? 0)};
`

export const ContainerColumn = styled.View`
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.center ? 'center' : 'stretch'};
    width: ${props => props.wid};
    padding: 0px ${props => toPixel(!!props.pad ? marginDefault : 0)};
    margin-top: ${props => toPixel(props.marginTop ?? 0)};
    margin-bottom: ${props => toPixel(props.marginBottom ?? 0)};
`