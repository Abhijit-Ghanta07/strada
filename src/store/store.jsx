import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductStore";
import cartSlice from "./Cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
