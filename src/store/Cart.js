import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.push(action.payload.id);
    },
    deleteFromCart: (state, action) => {
      console.log(action);
      return state.filter((arr) => arr !== action.payload.id);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice;
