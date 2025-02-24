import styled from 'styled-components/native'
import { marginDefault } from '@styles/layout'
import toPixel from '@utils/toPixel'

export const Wrapper = styled.View`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;
    padding: 32px 0 0;
`

export const StatusContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

export const StatusBox = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: ${toPixel(marginDefault)};
`