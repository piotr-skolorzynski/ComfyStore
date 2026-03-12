import { useLoaderData } from "react-router";
import type { IProduct } from "../models";
import { formatPrice } from "../utils";

const SingleProduct = () => {
  const { product } = useLoaderData<{ product: IProduct }>();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(Number(price));

  return (
    <div>
      {/* <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div> */}
    </div>
  );
};

export default SingleProduct;
