import type { ICartProduct } from "./cart-product.interface";

export interface IOrder {
  address: string;
  cartItems: ICartProduct[];
  chargeTotal: number;
  name: string;
  numItemsInCart: number;
  orderTotal: string;
}
