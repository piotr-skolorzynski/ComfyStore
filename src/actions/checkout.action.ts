import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { redirect, type ActionFunctionArgs } from "react-router";
import type { IOrder, StrapiErrorResponse } from "../models";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

export const checkoutAction =
  (store: Store<RootState>) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData) as {
      name: string;
      address: string;
    };
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const order = {
      name,
      address,
      chargeTotal: orderTotal,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
      cartItems,
    } as IOrder;

    try {
      const response = await customFetch.post(
        "/orders",
        { data: order },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        },
      );

      store.dispatch(clearCart());
      toast.success("order placed successfully");
      console.log(response);

      return redirect("/orders");
    } catch (error) {
      let errorMessage = "there was an error placing your order";

      if (isAxiosError<StrapiErrorResponse>(error)) {
        errorMessage = error.response?.data?.error?.message || errorMessage;

        if (error.response?.status === 401 || error.response?.status === 403)
          return redirect("/login");
      }

      toast.error(errorMessage);
    }

    return null;
  };
