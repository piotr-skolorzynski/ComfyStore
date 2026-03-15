import type { ICartProduct } from "./cart-product.interface";

export interface ICartState {
  cartItems: ICartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}
