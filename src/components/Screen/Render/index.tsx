import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { Platform, RefreshControl, StatusBar, StatusBarProps } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useIsFocused } from '@react-navigation/native'
import { useTheme } from '@hooks/useTheme'
import createScreen from '@modules/app/utils/createScreen'
import { useAppDispatch } from '@redux/hooks'
import toPixel from '@utils/toPixel'
import { Wrapper } from './styles'
import { ScreenRenderProps } from './types'

const Render: React.FC <ScreenRenderProps> = React.memo(({
    children,
    header,
    align = 'flex-start',
    bounces = false,
    wrapperBackgroundColor,
    statusBarMargin,
    paddingBottom,
    onRefresh,
    loadingColor,
    statusBarOptions,
    disableBottomEdge = false,
    onScroll
}) => {

    const dispatch = useAppDispatch()
    
    const [refreshLoading, setRefreshLoading] = useState(false)

    const isFocused = useIsFocused()

    const theme = useTheme()

    const wrapperBGColor = useMemo(() => 
        wrapperBackgroundColor ?? theme.colors.background, [wrapperBackgroundColor, theme.colors.background]
    )

    const barColor = useMemo(() => (
        statusBarOptions?.backgroundColor ?? (statusBarOptions?.translucent ? 'transparent' : wrapperBGColor )
    ), [statusBarOptions, wrapperBGColor])

    const barStyle = useMemo(() =>(
        statusBarOptions?.barStyle ?? (theme.dark ? 'dark-content' : 'light-content')
    ), [statusBarOptions, theme.dark])

    const refreshColor = useMemo(() => {
        if(loadingColor) return loadingColor
        return Platform.OS === 'ios' ? (barStyle === 'dark-content' ? [theme.colors.primary] : ['#fff']) : [theme.colors.primary]
    }, [loadingColor, barStyle, theme.colors.primary])

    const statusBarProps: StatusBarProps = useMemo(() => ({
        barStyle,
        backgroundColor: barColor,
        animated: statusBarOptions?.animated ?? false,
        translucent: statusBarOptions?.translucent ?? false,
    }), [barStyle, barColor, statusBarOptions])

    const wrapperProps = useMemo(() => ({
        align,
        pad: typeof paddingBottom === 'number' ? toPixel(paddingBottom) : undefined,
        statusBarMargin,
    }), [align, paddingBottom, statusBarMargin])

    useEffect(() => {
        if(isFocused){
            createScreen(dispatch, {
                statusBarColor: barColor,
                backgroundColor: wrapperBGColor,
                disableBottomEdge,
            })
        }
    }, [isFocused, barColor, wrapperBGColor, disableBottomEdge])

    const handleRefresh = useCallback(async () => {
        setRefreshLoading(true)
        await onRefresh?.()
        setRefreshLoading(false)
    }, [onRefresh])

    return(

        <>
            {isFocused && <StatusBar {...statusBarProps} />}
            {!!header && header}
            <KeyboardAwareScrollView
                contentContainerStyle = {{ flexGrow: 1, backgroundColor: wrapperBGColor }}
                keyboardShouldPersistTaps = "handled"
                bounces = {bounces}
                onScroll = {onScroll}
                refreshControl = {onRefresh && (
                    <RefreshControl
                        colors = {refreshColor}
                        tintColor = {refreshColor[0]}
                        refreshing = {refreshLoading}
                        style = {{ backgroundColor: barColor }}
                        onRefresh = {handleRefresh}
                    />
                )}
            >
                <Wrapper {...wrapperProps}>{children}</Wrapper>
            </KeyboardAwareScrollView>
        </>

    )

})

export default Render