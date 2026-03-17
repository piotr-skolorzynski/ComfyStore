import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { redirect } from "react-router";
import { toast } from "react-toastify";

export const checkUserAccessLoader = (store: Store<RootState>) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }

  return null;
};
