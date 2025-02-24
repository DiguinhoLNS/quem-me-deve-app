import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateCharge } from "../interfaces/CreateCharge"

interface State {
    currentCreateCharge: Partial<CreateCharge>
}

const initialState: State = {
    currentCreateCharge: {
        amount: 0,
        formattedAmount: '',
        debtorName: undefined,
        debtorCellphone: undefined
    }
}

const createChargeReducer = createSlice({
    name: 'createCharge',
    initialState,
    reducers: {
        setCurrentCreateCharge(state, action: PayloadAction<Partial<CreateCharge>>){
            state.currentCreateCharge = {
                ...state.currentCreateCharge,
                ...action.payload
            }
        },

        resetCurrentCreateCharge(state){
            state.currentCreateCharge = initialState.currentCreateCharge
        },
    }
})

export const { setCurrentCreateCharge, resetCurrentCreateCharge } = createChargeReducer.actions
export default createChargeReducer.reducer