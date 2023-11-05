import { createSlice, current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = state.cartItems.filter(
        (data) => data.id == action.payload.id
      );
      console.log(cart);
      if (cart[0]) {
        alert("Cart item has been already added");
      } else {
        const item = {
          ...action.payload,
          qty: 1,
          amount: parseInt(action.payload.price),
        };

        state.cartItems.push(item);
        state.totalAmount =
          parseInt(state.totalAmount) + parseInt(action.payload.price);
        state.totalQty = parseInt(state.totalQty) + 1;
      }
    },

    addQty: (state, action) => {
      const objcart = state.cartItems.find(
        (data) => data.id === action.payload
      );
      if (objcart) {
        objcart.qty = objcart.qty + 1;
        objcart.amount = objcart.price * objcart.qty;
        console.log(state.totalAmount);
        state.totalAmount = state.totalAmount + objcart.price;
        console.log(objcart.amount);
        console.log(state.totalAmount);
        state.totalQty = state.totalQty + 1;
      }
    },
    removeQty: (state, action) => {
      const objcart = state.cartItems.find(
        (data) => data.id === action.payload
      );
      if (objcart) {
        if (objcart.qty == 1) {
          const items = state.cartItems.filter(
            (data) => data.id !== action.payload
          );
          state.cartItems = items;
          state.totalQty = state.totalQty - 1;
          state.totalAmount = state.totalAmount - objcart.price;
        } else {
          objcart.qty = objcart.qty - 1;
          objcart.amount = objcart.amount - objcart.price;
          state.totalAmount = state.totalAmount - objcart.price;
          state.totalQty = state.totalQty - 1;
        }
      }
    },
  },
});

export const { addToCart, addQty, removeQty } = cartSlice.actions;

export default cartSlice.reducer;
