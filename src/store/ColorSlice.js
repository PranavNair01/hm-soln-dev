import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
    name: 'color',
    initialState: {
        color: "#fff",
    },
    reducers: {
        changeColor(state, action) {
            state.color = action.payload;
        }
    }
})

export const colorActions = colorSlice.actions;

export default colorSlice;