import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../productdata.json";

const initialState = {
  products: ProductData,
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getProductById: (state, action) => {
      const p = state.products.filter((data) => data.id === action.payload);
      state.selectedProduct = p;
    },
  },
});

export const { getProductById } = productSlice.actions;
export default productSlice.reducer;
