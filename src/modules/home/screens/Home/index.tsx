import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import CreateFab from '@modules/charge/components/CreateFAB'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import AppHeader from '@modules/app/components/Header'
import { resetCurrentCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { useAppDispatch } from '@redux/hooks'
import { marginDefault } from '@styles/layout'

const Home: React.FC = () => {

    const dispatch = useAppDispatch()

    const [fabExtended, setFabExtended] = useState(true)

    const theme = useTheme()

    const navigation = useNavigation<any>()
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
                <Container
                    marginTop = {marginDefault}
                    marginBottom = {marginDefault * 2}
                    padding = {false}
                >
                    <Section>
                    </Section>

                    <Section>
                    </Section>
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