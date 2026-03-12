import type { IPagination } from "./pagination.interface";

export interface IProductsMetaData {
  categories: string[];
  companies: string[];
  pagination: IPagination;
}
