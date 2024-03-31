import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlices = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const deleteindex = action.payload;
      return state.filter((value, index) => index !== deleteindex);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlices.actions;
export default customerSlices.reducer;
