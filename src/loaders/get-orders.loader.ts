import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { redirect, type LoaderFunctionArgs } from "react-router";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { isAxiosError } from "axios";
import type {
  IOrdersResponse,
  IOrdersResponseMeta,
  StrapiErrorResponse,
} from "../models";

export const getOrdersLoader =
  (store: Store<RootState>) =>
  async ({ request }: LoaderFunctionArgs) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta } as {
        orders: IOrdersResponse[];
        meta: IOrdersResponseMeta;
      };
    } catch (error) {
      let errorMessage = "there was an error fetching your orders";

      if (isAxiosError<StrapiErrorResponse>(error)) {
        errorMessage = error.response?.data?.error?.message || errorMessage;

        if (error.response?.status === 401 || error.response?.status === 403)
          return redirect("/login");
      }

      toast.error(errorMessage);

      return null;
    }
  };
