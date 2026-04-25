import { Contact } from "react-native-contacts/type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { formatContactDisplayName } from "@utils/format"
import { OrderContact } from "../interfaces/OrderContact"
import { getContactName } from "../controllers/coreController"

interface State {
    contacts: OrderContact[] | null
}

const initialState: State = {
    contacts: null
}

const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<Contact[]>) => {
            let obj: any = {}

            action.payload.forEach(contact => {
                if(!contact.displayName && !contact.givenName) return
                
                const key = formatContactDisplayName(getContactName(contact)[0])
                obj[key] = action.payload.filter(f => key === formatContactDisplayName(getContactName(f)[0]))
            })

            state.contacts = obj
        },
    }
})

export const { setContacts } = coreSlice.actions
export default coreSlice.reducer