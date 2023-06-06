import React, { useEffect, useMemo, useState } from 'react'
import { Platform, RefreshControl, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useIsFocused } from '@react-navigation/native'
import { useAppSelector } from '@redux/hooks'
import toPixel from '@utils/toPixel'
import { ScreenRenderProps } from './types'
import { Wrapper } from './styles'
import { StatusBarProps } from 'react-native'

const Render: React.FC<ScreenRenderProps> = ({
    children,
    header,
    align,
    bounces,
    wrapperColor,
    statusBarMargin,
    paddingBottom,
    onRefresh,
    loadingColor,
    statusBarOptions
}) => {

    const { theme } = useAppSelector(s => s.theme)

    const [resfreshLoading, setRefreshLoading] = useState<boolean>(false)
    const isFocused = useIsFocused()  

    const wrapperBackgroundColor = useMemo(() => {
        return wrapperColor ?? theme.layout.primary
    }, [wrapperColor, theme])

    const barColor = useMemo(() => {
        return !!statusBarOptions?.backgroundColor ? statusBarOptions?.backgroundColor : statusBarOptions?.translucent === true ? 'transparent' : wrapperBackgroundColor
    }, [statusBarOptions, wrapperBackgroundColor])

    const barStyle = useMemo(() => {
        return statusBarOptions?.barStyle ?? theme.scheme === 'dark-mode' ? 'light-content' : 'dark-content'
    }, [statusBarOptions, theme])

    const refreshColor = useMemo(() => {
        return loadingColor ?? Platform.OS === 'ios' ? barStyle === 'dark-content' ? [theme.colors.primary] : ['#fff'] : [theme.colors.primary]
    }, [loadingColor, barStyle])

    const statusBarProps: StatusBarProps = {
        barStyle,
        backgroundColor: barColor,
        animated: statusBarOptions?.animated ?? false,
        translucent: statusBarOptions?.translucent ?? false,
    }
    
    const wrapperProps = {
        align: align ?? 'flex-start',
        pad: typeof paddingBottom === 'number' ? toPixel(paddingBottom) : undefined,
        statusBarMargin,
    }

    return (

        <>
            {isFocused && <StatusBar {...statusBarProps} />}
            {!!header && header}
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1, backgroundColor: wrapperBackgroundColor }}
                keyboardShouldPersistTaps="handled"
                bounces={bounces ?? true}
                refreshControl={onRefresh && (
                    <RefreshControl
                        colors={refreshColor}
                        tintColor={refreshColor[0]}
                        refreshing={resfreshLoading}
                        style={{ backgroundColor: barColor }}
                        onRefresh={async () => {
                            setRefreshLoading(true)
                            await onRefresh()
                            setRefreshLoading(false)
                        }}
                    />
                )}
            >
                <Wrapper {...wrapperProps}>{children}</Wrapper>
            </KeyboardAwareScrollView>
        </>

    )

}

export default Render