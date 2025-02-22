import React from 'react'
import { Text } from 'react-native-paper'
import Container from '@components/Layout/Container'
import { useAppSelector } from '@redux/hooks'
import dayMoment from '@utils/dayMoment'
import { formatDate } from '@utils/format'
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter'
import * as S from './styles'

const HomeUserInfo: React.FC = () => {

    const { userData } = useAppSelector(s => s.auth)

    return(

        <>  
            <Container type = "row" between padding = {false} wrap = {false}>
                <S.LeftContainer>
                    <Text>{dayMoment()}</Text>
                    <Text variant = "titleLarge">{capitalizeFirstLetter(userData!.login)}</Text>
                </S.LeftContainer>
                
                <S.RightContainer>
                    <Text>Login</Text>
                    <Text variant = "titleSmall">{formatDate(userData!.dtLogin)}</Text>
                </S.RightContainer>
            </Container>
        </>

    )

}

export default HomeUserInfo