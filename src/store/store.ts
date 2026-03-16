import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.ts";
import userReducer from "../features/user/userSlice.ts";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
