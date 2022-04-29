import { createSlice } from '@reduxjs/toolkit'

export const codeSlice = createSlice({
    name: 'code',
    initialState: {
        value: "0",
    },
    reducers: {
        changeCode: (state, action) => {
            state.value = action.payload
        },
    },
})



// Action creators are generated for each case reducer function
export const { changeCode } = codeSlice.actions

export default codeSlice.reducer