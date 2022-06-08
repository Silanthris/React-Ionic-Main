import { createSlice } from '@reduxjs/toolkit'

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        value: "0",
    },
    reducers: {
        changeType: (state, action) => {
            state.value = action.payload
        },
    },
})



// Action creators are generated for each case reducer function
export const { changeType } = typeSlice.actions

export default typeSlice.reducer