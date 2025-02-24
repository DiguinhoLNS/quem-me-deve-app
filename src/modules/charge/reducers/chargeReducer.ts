import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Charge } from "../interfaces/Charge"

interface State {
    chargeList: Charge[] | null
    currentCharge: Charge | null

    chargeFilter: number
}

const initialState: State = {
    chargeList: null,
    currentCharge: null,

    chargeFilter: 0
}

const chargeReducer = createSlice({
    name: 'charge',
    initialState,
    reducers: {
        setChargeList(state, action: PayloadAction<Charge[] | null>){
            state.chargeList = action.payload
        },
        setCurrentCharge(state, action: PayloadAction<Charge | null>){
            state.currentCharge = action.payload
        },

        newCharge(state, action: PayloadAction<Charge>){
            if(!!state.chargeList){
                state.chargeList.push(action.payload)
            }else{
                state.chargeList = [action.payload]
            }
        },

        updateCharge(state, action: PayloadAction<Charge>){
            if(!!state.chargeList){
                const index = state.chargeList.findIndex(f => f.uuid === action.payload.uuid)
                state.chargeList[index] = action.payload
            }else{
                state.chargeList = [action.payload]
            }

            if(!!state.currentCharge && state.currentCharge.uuid === action.payload.uuid){
                state.currentCharge = action.payload
            }
        },

        deleteCharge(state, action: PayloadAction<string>){
            if(!!state.chargeList){
                state.chargeList = state.chargeList.filter(f => f.uuid !== action.payload)

                if(!!state.currentCharge && state.currentCharge.uuid === action.payload){
                    state.currentCharge = null
                }
            }
        },

        toggleFixedCharge(state, action: PayloadAction<string>){
            if(!!state.chargeList){
                const index = state.chargeList.findIndex(f => f.uuid === action.payload)
                state.chargeList[index].fixed = !state.chargeList[index].fixed

                if(!!state.currentCharge && state.currentCharge.uuid === action.payload){
                    state.currentCharge.fixed = !state.currentCharge.fixed
                }
            }
        },

        checkCharge(state, action: PayloadAction<string>){
            if(!!state.chargeList){
                const index = state.chargeList.findIndex(f => f.uuid === action.payload)

                state.chargeList[index].dtPaid = new Date().toISOString()
                state.chargeList[index].fixed = false

                if(!!state.currentCharge && state.currentCharge.uuid === action.payload){
                    state.currentCharge.dtPaid = new Date().toISOString()
                    state.currentCharge.fixed = false
                }
            }
        },

        setChargeFilter(state, action: PayloadAction<number>){
            state.chargeFilter = action.payload
        },
    }
})

export const {
    setChargeList, setCurrentCharge,
    newCharge, updateCharge, deleteCharge,
    toggleFixedCharge, checkCharge,
    setChargeFilter
} = chargeReducer.actions
export default chargeReducer.reducer