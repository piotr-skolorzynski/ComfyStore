import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { ICartProduct, ICartState } from "../../models";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
} as ICartState;

const TAX = 0.1;

const getCartFromLocalStorage = (): ICartState => {
  const state = localStorage.getItem("cart");

  if (state) {
    return JSON.parse(state);
  } else {
    return defaultState;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload as { product: ICartProduct };
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID,
      );

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
    calculateTotals: (state) => {
      state.tax = TAX * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
