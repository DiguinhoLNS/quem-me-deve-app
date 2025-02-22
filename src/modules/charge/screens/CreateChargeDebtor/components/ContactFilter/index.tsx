import React, { useState } from 'react'
import { Contact } from 'react-native-contacts/type'
import { StackScreenProps } from '@react-navigation/stack'
import { Divider, IconButton, List, Text } from 'react-native-paper'
import Section from '@components/Layout/Section'
import Container from '@components/Layout/Container'
import { useTheme } from '@hooks/useTheme'
import { OrderContact } from '@modules/core/interfaces/OrderContact'
import { setCreateCharge } from '@modules/charge/reducers/createChargeReducer'
import { CreateChargeRouteParams } from '@modules/charge/routes/CreateCharge/types'
import { getContactName, sortCompareContatosKeys } from '@modules/core/controllers/coreController'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { marginDefault } from '@styles/layout'
import ContactItem from '../ContactItem'
import ContactSearchbar from '../ContactSearchbar'

const Filter: React.FC <StackScreenProps<CreateChargeRouteParams, 'createChargeDebtor'>> = ({ navigation }) => {

    const dispatch = useAppDispatch()
    const { contacts } = useAppSelector(s => s.core)
    const { createCharge } = useAppSelector(s => s.createCharge)

    const [searchValue, setSearchValue] = useState('')

    const theme = useTheme()

    const filteredContacts = (!!contacts && !!searchValue) ? ((Object.values(contacts) as any).flat(1) as Contact[]).filter(f => getContactName(f).toLowerCase().includes(searchValue.toLowerCase())) : []

    const SHOW_FILTERED_CONTACTS = !!filteredContacts && searchValue.length > 0
    const SHOW_NODATA_FILTERED_CONTACTS = !!filteredContacts && filteredContacts.length === 0 && searchValue.length > 0
    const SHOW_CONTACTS = !!contacts && !SHOW_FILTERED_CONTACTS

    const handleSelectContact = (item: Contact) => {
        dispatch(setCreateCharge({
            debtorName: getContactName(item),
            debtorCellphone: item.phoneNumbers[0].number,
        }))

        navigation.navigate('createChargeResume')
    }

    const handleCreateDebtor = () => {
        dispatch(setCreateCharge({
            debtorName: searchValue
        }))

        navigation.navigate('createChargeResume')
    }

    return(

        <>
            <Container marginTop = {marginDefault} padding = {false}>
                <Section marginBottom = {marginDefault}>
                    <Text style = {{fontSize: 40}}>Quem vai receber a <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                </Section>

                <ContactSearchbar
                    value = {searchValue}
                    setValue = {setSearchValue}
                    onCreate = {handleCreateDebtor}
                />

                <Section marginTop = {marginDefault} padding = {false}>
                    {SHOW_FILTERED_CONTACTS && filteredContacts.map((item) => (
                        <ContactItem
                            key = {item.recordID}
                            label = {getContactName(item)}
                            description = {item.phoneNumbers[0].number}
                            selected = {createCharge.debtorCellphone === item.phoneNumbers[0].number}
                            onPress = {() => handleSelectContact(item)}
                        />
                    ))}

                    {SHOW_NODATA_FILTERED_CONTACTS && (
                        <Container marginTop = {marginDefault * 4} center>
                            <Text variant = "titleMedium">Nenhum resultado para</Text>
                            <Text variant = "titleLarge" style = {{fontWeight: '700'}}>"{searchValue}"</Text>
                        </Container>
                    )}

                    {SHOW_CONTACTS && Object.keys(contacts).sort(sortCompareContatosKeys).map((key) => (
                        <List.Section key = {key}>
                            <List.Subheader>{key.toUpperCase()}</List.Subheader>
                            <Divider />
                            
                            {((contacts as unknown as OrderContact)[key]).map((item) => (
                                <ContactItem
                                    key = {item.recordID}
                                    label = {getContactName(item)}
                                    description = {item.phoneNumbers[0].number}
                                    selected = {createCharge.debtorCellphone === item.phoneNumbers[0].number}
                                    onPress = {() => handleSelectContact(item)}
                                />
                            ))}

                            <Divider />
                        </List.Section>
                    ))}
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
                    icon = 'arrow-right'
                    disabled = {searchValue.length === 0 && !createCharge.debtorName}
                    iconColor = {theme.colors.success}
                    containerColor = {theme.colors.successContainer}
                    size = {32}
                    onPress = {handleCreateDebtor}
                />
            </Section>
        </>

    )

}

export default Filter