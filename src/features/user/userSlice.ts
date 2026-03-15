import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { IUserState } from "../../models";

const initialState = {
  user: { username: "Skolo" },
  theme: "dracula",
} as IUserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state: IUserState, action: PayloadAction) => {
      console.log("login");
    },
    logoutUser: (state: IUserState) => {
      console.log("logout");
    },
    toggleTheme: (state: IUserState) => {
      console.log("toggle theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
