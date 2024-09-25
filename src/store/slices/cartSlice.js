import { createSlice } from "@reduxjs/toolkit";

//const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addproduct(state, action) {
      state.push(action.payload);
    },
    removeproduct(state, action) {
      console.log(1);
    },
    allproductremove(state, action) {
      console.log(1);
    },
  },
});

export const { addproduct, removeproduct, allproductremove } = cartSlice.actions;
export default cartSlice.reducer;
