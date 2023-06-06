import React, { useEffect, useMemo, useState } from 'react'
import { Platform, RefreshControl, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useIsFocused } from '@react-navigation/native'
import { useAppSelector } from '@redux/hooks'
import toPixel from '@utils/toPixel'
import { ScreenRenderProps } from './types'
import { Wrapper } from './styles'

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

    const barStyle = useMemo(() => {
        return statusBarOptions?.barStyle ?? 'dark-content'
    }, [statusBarOptions])

    const barColor = useMemo(() => {
        return !!statusBarOptions?.backgroundColor ? statusBarOptions?.backgroundColor : statusBarOptions?.translucent === true ? 'transparent' : wrapperColor ?? '#ffffff'
    }, [statusBarOptions, wrapperColor])

    const wrapperBackgroundColor = useMemo(() => {
        return wrapperColor ?? theme.layout.primary
    }, [wrapperColor, theme])

    const refreshColor = useMemo(() => {
        return loadingColor ?? Platform.OS === 'ios' ? barStyle === 'dark-content' ? [theme.colors.primary] : ['#fff'] : [theme.colors.primary]
    }, [loadingColor, barStyle])

    const statusBarProps = {
        barStyle,
        backgroundColor: barColor,
        animated: statusBarOptions?.animated ?? true,
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