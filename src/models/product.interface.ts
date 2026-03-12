import type { IProductAttributes } from "./product-attributes.interface";

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}
