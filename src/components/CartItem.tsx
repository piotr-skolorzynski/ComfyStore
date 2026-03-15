import { useDispatch } from "react-redux";
import type { ICartProduct } from "../models";
import { formatPrice } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

interface ICartItemProps {
  cartItem: ICartProduct;
}

const CartItem = ({ cartItem }: ICartItemProps) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const dispatch = useDispatch();

  const removeItemFromTheCart = () => dispatch(removeItem({ cartID }));

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(editItem({ cartID, amount: Number(e.target.value) }));

  const generateAmountOptions = (optionsAmount: number): string[] =>
    Array.from({ length: optionsAmount }, (_, index) => String(index + 1));

  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32"
      />

      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2 ">
          color :{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="max-w-xs">
          <fieldset className="fieldset">
            <legend className="fieldset-legend capitalize">amount</legend>
            <select
              name="amount"
              id="amount"
              value={amount}
              className={`select select-bordered select-sm`}
              onChange={handleAmount}
            >
              {generateAmountOptions(amount + 5).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
