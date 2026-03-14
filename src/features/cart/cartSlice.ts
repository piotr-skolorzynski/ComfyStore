import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface ICartItem {
  item: string;
}

interface ICartState {
  cartItems: ICartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
} as ICartState;

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state) => {},

    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
