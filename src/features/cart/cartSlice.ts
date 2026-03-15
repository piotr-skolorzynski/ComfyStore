import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
    addItem: (state: ICartState, action: PayloadAction<ICartProduct>) => {
      const product = action.payload;
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
    clearCart: (): ICartState => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (
      state: ICartState,
      action: PayloadAction<Partial<ICartProduct>>,
    ) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID,
      );
      if (product) {
        state.numItemsInCart -= product.amount;
        state.cartTotal -= product.price * product.amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.error("Item removed from cart");
      }
    },
    editItem: (
      state: ICartState,
      action: PayloadAction<Partial<ICartProduct>>,
    ) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);

      if (amount && item) {
        state.numItemsInCart += amount - item?.amount;
        state.cartTotal += item.price * (amount - item?.amount);
        item.amount = amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success("Cart updated");
      }
    },
    calculateTotals: (state: ICartState) => {
      state.tax = TAX * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
