import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state,action) => {
      console.log(action.payload)
      const index=state.items.findIndex((item)=>item.id===action.payload.id)
      if(index>=0){
      state.items.splice(index,1)
      }
      console.log(index)
      //state.items.filter((rem)=>rem.card.info.id!=action.payload)
    // items.map((rem)=>console.log(rem))
    // console.log("items are")
     //console.log(state.items)

    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
