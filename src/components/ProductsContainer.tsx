import { useLoaderData } from "react-router";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import type { IProductsMetaData } from "../models";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const LayoutStyle = {
  Grid: "Grid",
  List: "List",
} as const;

type LayoutStyle = (typeof LayoutStyle)[keyof typeof LayoutStyle];

const ProductsContainer = () => {
  const { meta } = useLoaderData() as { meta: IProductsMetaData };
  console.log(meta);

  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState<LayoutStyle>(LayoutStyle.Grid);

  const setActiveStyles = (pattern: LayoutStyle) => {
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? "btn-primary text-primary-content" : "btn-ghost text-based-content"}`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout(LayoutStyle.Grid)}
            className={setActiveStyles(LayoutStyle.Grid)}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout(LayoutStyle.List)}
            className={setActiveStyles(LayoutStyle.List)}
          >
            <BsList />
          </button>
        </div>
      </div>

      {totalProducts === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ) : layout === LayoutStyle.Grid ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
};

export default ProductsContainer;
