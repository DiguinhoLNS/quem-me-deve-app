import React, { useMemo } from 'react'
import { ContainerProps } from './types'
import { ContainerColumn, ContainerRow } from './styles'

const Container: React.FC <ContainerProps> = ({ children, type, ...props }) => {

    const renderType = useMemo(() => { return type ?? 'column' }, [type])

    const styles = {
        center: !!props.center,
        wid: props.width ?? '100%',
        between: !!props.between,
        wrap: props.wrap ?? false,
        pad: props.padding ?? true,
        marginTop: props.marginTop ?? 0,
        marginBottom: props.marginBottom ?? 0,
    }

    return(

        <>
            {renderType === 'column' && <ContainerColumn {...styles}>{children}</ContainerColumn> || <ContainerRow {...styles}>{children}</ContainerRow>}
        </>

    )

}

export default Container