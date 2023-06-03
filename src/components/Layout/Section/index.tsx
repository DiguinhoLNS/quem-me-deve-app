import React, { useMemo } from 'react'
import { SectionProps } from './types'
import { SectionColumn, SectionRow } from './styles'

const Section: React.FC <SectionProps> = ({ children, type, ...props }) => {

    const renderType = useMemo(() => { return type ?? 'column' }, [type])

    const styles = {
        center: !!props.center,
        between: !!props.between,
        wrap: props.wrap ?? true,
        pad: props.padding ?? true,
        marginTop: props.marginTop ?? 0,
        marginBottom: props.marginBottom ?? 0,
    }

    return (

        <>
            {renderType === 'column' && <SectionColumn {...styles}>{children}</SectionColumn> || <SectionRow {...styles}>{children}</SectionRow>}
        </>

    )

}

export default Section