import React from 'react'
import { Divider, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Section from '@components/Layout/Section'

const UserOptions: React.FC = () => {

    const navigation = useNavigation<any>()

    return(

        <>
            <Section padding = {false}>
                <Divider />

                <List.Item
                    title = "Dados"
                    description = "Visualizar seus dados"
                    left = {props => <List.Icon {...props} icon = "chart-bar" />}
                    onPress = {() => {
                        navigation.navigate('profileRoutes')
                    }}
                />
            </Section>

            <Section padding = {false}>
                <Divider />

                <List.Item
                    title = "Configurações"
                    description = "Configurar opções do aplicativo"
                    left = {props => <List.Icon {...props} icon = "cog" />}
                    onPress = {() => {
                        navigation.navigate('configurationRoutes')
                    }}
                />
                <List.Item
                    title = "Sobre"
                    description = "Informações sobre o aplicativo"
                    left = {props => <List.Icon {...props} icon = "information" />}
                    onPress = {() => {
                        
                    }}
                />

                <List.Item
                    title = "Termos de uso"
                    description = "Leia os termos de uso"
                    left = {props => <List.Icon {...props} icon = "file-document" />}
                    onPress = {() => {
                        
                    }}
                />

                <Divider />
            </Section>
        </>

    )

}

export default UserOptions