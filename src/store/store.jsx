import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Redux/Products/productSlice";
import cartReducer from "../Redux/Cart/cartSlice";
import newCartSlice from "../Redux/Cart/newCartSlice";

export const store = configureStore({
  reducer: {
    Products: productReducer,
    Cart: cartReducer,
    NewCart: newCartSlice,
  },
});
