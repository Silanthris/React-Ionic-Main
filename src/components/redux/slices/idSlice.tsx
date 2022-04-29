import { createSlice } from '@reduxjs/toolkit'

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        value: 0,
    },
    reducers: {
        changeId: (state, action) => {
            state.value = action.payload
        },
    },
})



// Action creators are generated for each case reducer function
export const { changeId } = idSlice.actions

export default idSlice.reducer