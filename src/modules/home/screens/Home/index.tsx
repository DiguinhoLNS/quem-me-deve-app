import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Render from '@components/Screen/Render'
import CreateFab from '@modules/charge/components/CreateFAB'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import AppHeader from '@modules/app/components/Header'
import { resetCurrentCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { useAppDispatch } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import List from './components/List'
import Overview from './components/Overview'
import HomeUserInfo from './components/UserInfo'

const Home: React.FC = () => {

    const dispatch = useAppDispatch()

    const [fabExtended, setFabExtended] = useState(true)

    const theme = useTheme()

    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused){
            dispatch(resetCurrentCreateCharge())
        }
    }, [isFocused])

    return(

        <>
            <Render
                statusBarOptions = {{ backgroundColor: theme.colors.primary }}
                disableBottomEdge
                paddingBottom = {marginDefault + 56}
                align = "space-between"
                header = {<AppHeader />}
                onScroll = {({ nativeEvent }) => {
                    const currentScrollPosition = Math.floor(nativeEvent?.contentOffset?.y) ?? 0

                    setFabExtended(currentScrollPosition <= 0)
                }}
            >
                <Container padding = {false}>
                    <HomeUserInfo />

                    <Overview />

                    <List />
                </Container>

                <Container>
                    
                </Container>
            </Render>

            <CreateFab
                extended = {fabExtended}
            />
        </>

    )

}

export default Home