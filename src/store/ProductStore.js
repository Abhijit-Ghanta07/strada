import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { fetching: false, fetchDone: false, phones: [], laptops: [] },
  reducers: {
    getPhones: (state, action) => {
      state.phones = action.payload.phones;
    },
    getLaptops: (state, action) => {
      state.laptops = action.payload.laptops;
    },
    setfetching: (state, action) => {
      state.fetching = true;
      state.fetchDone = false;
    },
    setfetchDone: (state, action) => {
      state.fetchDone = true;
      state.fetching = false;
    },
  },
});

export const { getLaptops, getPhones, setfetching, setfetchDone } =
  productSlice.actions;
export default productSlice;
