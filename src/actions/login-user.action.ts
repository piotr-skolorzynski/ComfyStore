import { redirect, type ActionFunctionArgs } from "react-router";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import type { ILoginUser, StrapiErrorResponse } from "../models";
import { customFetch } from "../utils";
import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { loginUser } from "../features/user/userSlice";

export const loginUserAction =
  (store: Store<RootState>) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as ILoginUser;

    try {
      const response = await customFetch.post("auth/local", data);
      toast.success("logged in successfully");
      store.dispatch(loginUser(response.data));

      return redirect("/");
    } catch (error) {
      let errorMessage = "please double check your credentials";
      if (isAxiosError<StrapiErrorResponse>(error)) {
        errorMessage = error.response?.data?.error?.message || errorMessage;
      }
      toast.error(errorMessage);

      return null;
    }
  };
