import styled from 'styled-components/native'
import { marginDefault } from '../../../styles/layout'
import toPixel from '../../../utils/toPixel'

export const SectionRow = styled.View`
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    flex-direction: row;
    justify-content: ${props => props.between ? 'space-between' : props.center ? 'center' : 'flex-start'};
    align-items: center;
    width: 100%;
    padding: 0px ${props => toPixel(!!props.pad ? marginDefault : 0)};
    margin-top: ${props => toPixel(props.marginTop ?? 0)};
    margin-bottom: ${props => toPixel(props.marginBottom ?? 0)};
`

export const SectionColumn = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.center ? 'center' : 'stretch'};
    width: 100%;
    padding: 0px ${props => toPixel(!!props.pad ? marginDefault : 0)};
    margin-top: ${props => toPixel(props.marginTop ?? 0)};
    margin-bottom: ${props => toPixel(props.marginBottom ?? 0)};
`