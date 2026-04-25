import React, { useMemo } from 'react'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'
import { useAppSelector } from '@redux/hooks'
import { AppSafeAreaProps } from './types'

const AppSafeArea: React.FC <AppSafeAreaProps> = React.memo(({ children }) => {

    const { screen } = useAppSelector(s => s.app)

    const { statusBarColor, backgroundColor, disableBottomEdge } = screen

    const styles = useMemo(() => ({
        statusBar: { flex: 1, backgroundColor: screen.statusBarColor },
        background: { flex: 0, backgroundColor: screen.backgroundColor }
    }), [statusBarColor, backgroundColor])

    const bottomEdges: Edges = useMemo(() => {
        const edges = ['left', 'right']
        
        if(!screen.disableBottomEdge) edges.push('bottom')
            
        return edges as Edges
    }, [disableBottomEdge])

    return(

        <>
            <SafeAreaView style = {styles.statusBar} edges = {['top']}>
                {children}
            </SafeAreaView>
            <SafeAreaView style = {styles.background} edges = {bottomEdges} />
        </>

    )

})

export default AppSafeArea