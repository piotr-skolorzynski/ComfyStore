import type { IProduct } from "../models";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const featuredProductsLoader = async () => {
  const response = await customFetch(url);
  const products: IProduct[] = response.data.data;

  return { products };
};
