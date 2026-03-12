import type { IProduct, IProductsMetaData } from "../models";
import { customFetch } from "../utils";

export const productsLoader = async ({ request }) => {
  const response = await customFetch("/products");

  const meta = response.data.meta as IProductsMetaData;
  const products = response.data.data as IProduct[];

  return { meta, products };
};
