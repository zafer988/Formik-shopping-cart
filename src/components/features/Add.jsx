import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { add } = addSlice.actions
export default addSlice.reducer
