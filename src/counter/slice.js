import {createSlice} from "@reduxjs/toolkit";

const counter = createSlice({
    name:"myCounter",
    initialState:{
        value:0
    },

    reducers: {
        increments: (state) => {
            state.value += 1
        },
        decrements: (state) => {
            state.value -= 1
        }
    }

})

export const {increments, decrements} = counter.actions;
export default counter.reducer;