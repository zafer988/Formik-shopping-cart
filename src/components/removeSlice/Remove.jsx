import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const removeSlice = createSlice({
    name: 'remove',
    initialState,
    reducers: {
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { remove } = removeSlice.actions
export default removeSlice.reducer