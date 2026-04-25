import styled from 'styled-components/native'

export const Box = styled.View`
    position: relative;
    padding: 12px;
    border-radius: 24px;
`

export const IconWrapper = styled.View`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;

    width: 24px;
    height: 24px;
    padding: 4px;
    /* background-color: red; */
    border-radius: 12px;
`

export const Group = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const Theme1 = styled.View`
    width: 100%;
    height: 50%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const Theme2 = styled.View`
    width: 50px;
    height: 50px;
    border-bottom-left-radius: 50px;
`

export const Theme3 = styled.View`
    width: 50px;
    height: 50px;
    border-bottom-right-radius: 50px;
`