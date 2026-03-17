import {
  redirect,
  type ActionFunction,
  type ActionFunctionArgs,
} from "react-router";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import type { IRegisterUser, StrapiErrorResponse } from "../models";
import { customFetch } from "../utils";

export const registerUserAction: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as IRegisterUser;
  console.log(data);

  try {
    await customFetch.post("auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    let errorMessage = "please double check your credentials";

    if (isAxiosError<StrapiErrorResponse>(error)) {
      errorMessage = error.response?.data?.error?.message || errorMessage;
    }
    toast.error(errorMessage);

    return null;
  }
};
