import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { responseInitialValues } from "@utils/response"
import { ResponseDefault, ResponsePattern } from "@utils/response/types"

interface State {
    
}

const initialState: State = {
    
}

const requestCoreSlice = createSlice({
    name: 'requestCore',
    initialState,
    reducers: {
        
    }
})

const { actions } = requestCoreSlice

export default requestCoreSlice.reducer