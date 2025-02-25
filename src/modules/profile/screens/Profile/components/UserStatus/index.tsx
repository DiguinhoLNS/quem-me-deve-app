import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Card } from 'react-native-paper'
import Section from '@components/Layout/Section'
import { useAppSelector } from '@redux/hooks'
import { formatDate } from '@utils/format'

const UserStatus: React.FC = () => {

    const { userData } = useAppSelector(s => s.auth)

    const navigation = useNavigation<any>()

    return(

        <>
            <Section marginBottom = {24}>
                <Card
                    onPress = {() => navigation.navigate('profileRoutes', { screen: 'profileEdit' })}
                >
                    <Card.Title
                        title = {userData!.name ?? userData!.login}
                        titleVariant = "titleLarge"
                        subtitle = {`Último login ${formatDate(new Date(userData!.dtLogin))}`}
                        left = {props => <Avatar.Icon {...props} icon = "account" />}
                    />
                </Card>
            </Section>
        </>

    )

}

export default UserStatus