import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateCharge } from "../interfaces/CreateCharge"

interface State {
    createCharge: Partial<CreateCharge>
}

const initialState: State = {
    createCharge: {
        amount: 0,
        formattedAmount: '',
        debtor: undefined,
    }
}

const createChargeReducer = createSlice({
    name: 'createCharge',
    initialState,
    reducers: {
        setCreateCharge(state, action: PayloadAction<Partial<CreateCharge>>){
            state.createCharge = {
                ...state.createCharge,
                ...action.payload
            }
        },

        resetCreateCharge(state){
            state.createCharge = initialState.createCharge
        },
    }
})

export const { setCreateCharge, resetCreateCharge } = createChargeReducer.actions
export default createChargeReducer.reducer