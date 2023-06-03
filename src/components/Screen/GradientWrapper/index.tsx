import React, { PropsWithChildren } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import themes from '@styles/themes'

const GradientWrapper: React.FC <PropsWithChildren> = ({ children }) => {

    return(

        <LinearGradient
            style = {{flexGrow: 1, width: '100%'}}
            colors = {[themes.colors.tertiary, '#821415']}
            useAngle
            angle = {180}
        >
            <>
                {children}
            </>
        </LinearGradient>

    )

}

export default GradientWrapper