import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.ts";
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
