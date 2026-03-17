import type { ICartProduct } from "./cart-product.interface";

export interface IOrdersResponse {
  id: number;
  attributes: {
    address: string;
    cartItems: ICartProduct[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: string;
    publishedAt: string;
    updatedAt: string;
  };
}
