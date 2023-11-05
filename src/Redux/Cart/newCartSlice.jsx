import { createSlice } from "@reduxjs/toolkit";

export const newCartSlice = createSlice({
  name: "newcart",
  initialState: {
    cartItems: [],
    total: 5,
  },
  reducers: {
    addToCart: (state, action) => {},
    addQty: (state, action) => {
      console.log(...state.cartItems);
    },
  },
});

export const { addToCart, addQty } = newCartSlice.actions;
export default newCartSlice.reducer;
