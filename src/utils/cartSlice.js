import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:'cartlist',
    initialState:{
        items:[1,2,3]
    },
    reducers:{
        addItem:(state,action)=>{
        state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export default cartSlice.reducer;
export const{addItems, removeItems,clearcart}= cartSlice.actions;