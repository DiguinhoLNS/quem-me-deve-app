import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { responseInitialValues } from "@utils/response"
import { ResponseDefault, ResponsePattern } from "@utils/response/types"

interface State {

}

const initialState: State = {

}

const requestAppSlice = createSlice({
    name: 'requestApp',
    initialState,
    reducers: {
        
    }
})

const { actions } = requestAppSlice

export const request = {

}

export default requestAppSlice.reducer