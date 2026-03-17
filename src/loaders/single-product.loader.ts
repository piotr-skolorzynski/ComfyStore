import type { LoaderFunctionArgs } from "react-router";
import type { IProduct } from "../models";
import { customFetch } from "../utils";

export const singleProductLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await customFetch(`/products/${params.id}`);
  const product: IProduct = response.data.data;

  return { product };
};
