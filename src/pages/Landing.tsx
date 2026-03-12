import { Hero } from "../components";
import { customFetch } from "../utils";

export interface IProductAttributes {
  category: string;
  colors: string[];
  company: string;
  createdAt: string;
  description: string;
  featured: boolean;
  image: string;
  price: string;
  publishedAt: string;
  shipping: boolean;
  title: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products: IProduct[] = response.data.data;

  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
