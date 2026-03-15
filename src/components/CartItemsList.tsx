import { useSelector } from "react-redux";
import type { ICartProduct, IState } from "../models";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems: ICartProduct[] = useSelector(
    (state: IState) => state.cartState.cartItems,
  );

  return (
    <>
      {cartItems.map((item, index) => (
        <CartItem key={index} cartItem={item} />
      ))}
    </>
  );
};

export default CartItemsList;
