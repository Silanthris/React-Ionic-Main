import { createSlice } from '@reduxjs/toolkit'

export const menuChoiceSlice = createSlice({
    name: 'choice',
    initialState: {
        value: "all",
    },
    reducers: {
        changeChoice: (state, action) => {
            state.value = action.payload
        },
    },
})



// Action creators are generated for each case reducer function
export const { changeChoice } = menuChoiceSlice.actions

export default menuChoiceSlice.reducer