import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import Render from '@components/Screen/Render'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { marginDefault } from '@styles/layout'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import resetNavigation from '@utils/resetNavigation'

const CreateChargeResume: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeResume'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { createCharge } = useAppSelector(s => s.createCharge)

    const theme = useTheme()

    const handleSave = () => {
        resetNavigation(navigation)
    }

    return(

        <>
            <Render
                statusBarOptions = {{ barStyle: 'dark-content' }}
                align = "space-between"
            >
                <Container marginTop = {marginDefault} padding = {false}>
                    <Section marginBottom = {12}>
                        <Text style = {{fontSize: 32}}>Você está cobrando,</Text>
                        <Text style = {{fontSize: 32}}>
                            <Text
                                style = {{color: theme.colors.primary, fontWeight: '700'}}
                                onPress = {() => navigation.navigate('createChargeValue')}
                            >{createCharge.formattedAmount}</Text>
                            <Text> de </Text>
                            <Text
                                style = {{color: theme.colors.primary, fontWeight: '700'}}
                                onPress = {() => navigation.goBack()}
                            >{createCharge.debtorName}</Text>
                        </Text>
                    </Section>

                    <Section>
                        <Text style = {{fontSize: 32}}>Deseja continuar com essa <Text style = {{fontWeight: 700}}>Cobrança?</Text></Text>
                    </Section>
                </Container>

                <Section type = "row" between>
                    <IconButton
                        icon = 'arrow-left'
                        size = {32}
                        onPress = {() => {
                            navigation.goBack()
                        }}
                    />
                    <IconButton
                        mode = "contained"
                        icon = 'check'
                        iconColor = {theme.colors.success}
                        containerColor = {theme.colors.successContainer}
                        size = {32}
                        onPress = {handleSave}
                    />
                </Section>
            </Render>
        </>

    )

}

export default CreateChargeResume