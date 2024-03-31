import { configureStore } from "@reduxjs/toolkit";
import customerReduser from "./slice/customerSlices";
export const store = configureStore({
  devTools: true,
  reducer: {
    customer: customerReduser,
  },
});
