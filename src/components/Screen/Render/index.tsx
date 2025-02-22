import React, { useEffect, useMemo, useState } from 'react'
import { Platform, RefreshControl, StatusBar, StatusBarProps } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useIsFocused } from '@react-navigation/native'
import { useTheme } from '@hooks/useTheme'
import AppSafeArea from '@components/Screen/SafeArea'
import createScreen from '@modules/app/utils/createScreen'
import { useAppDispatch } from '@redux/hooks'
import toPixel from '@utils/toPixel'
import { Wrapper } from './styles'
import { ScreenRenderProps } from './types'

const Render: React.FC <ScreenRenderProps> = ({
    children,
    header,
    align,
    bounces = false,
    wrapperBackgroundColor,
    statusBarMargin,
    paddingBottom,
    onRefresh,
    loadingColor,
    statusBarOptions,
    onScroll
}) => {

    const dispatch = useAppDispatch()

    const [resfreshLoading, setRefreshLoading] = useState<boolean>(false)

    const isFocused = useIsFocused()  
    
    const theme = useTheme()

    const wrapperBGColor = useMemo(() => {
        return wrapperBackgroundColor ?? theme.colors.background
    }, [wrapperBackgroundColor, theme])

    const barColor = useMemo(() => {
        return !!statusBarOptions?.backgroundColor ? statusBarOptions?.backgroundColor : statusBarOptions?.translucent === true ? 'transparent' : wrapperBGColor
    }, [statusBarOptions, wrapperBackgroundColor])

    const barStyle = useMemo(() => {
        return (!!statusBarOptions && !!statusBarOptions.barStyle) ? statusBarOptions?.barStyle : theme.dark ? 'dark-content' : 'light-content'
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

    useEffect(() => {
        if(isFocused){
            createScreen(dispatch, {
                statusBarColor: barColor,
                backgroundColor: wrapperBGColor
            })
        }
    }, [dispatch, isFocused, barColor, wrapperBGColor])

    return (

        <>
            <AppSafeArea
                statusBarColor = {barColor}
                backgroundColor = {wrapperBGColor}
            >
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
                            refreshing = {resfreshLoading}
                            style = {{ backgroundColor: barColor }}
                            onRefresh = {async () => {
                                setRefreshLoading(true)
                                await onRefresh()
                                setRefreshLoading(false)
                            }}
                        />
                    )}
                >
                    <Wrapper {...wrapperProps}>{children}</Wrapper>
                </KeyboardAwareScrollView>
            </AppSafeArea>
        </>

    )

}

export default Render