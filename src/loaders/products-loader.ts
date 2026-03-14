import type { LoaderFunctionArgs } from "react-router";
import type { IProduct, IProductsMetaData } from "../models";
import { customFetch } from "../utils";

export const productsLoader = async ({ request }: LoaderFunctionArgs) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch("/products", { params });
  const meta = response.data.meta as IProductsMetaData;
  const products = response.data.data as IProduct[];

  return { meta, products, params };
};
