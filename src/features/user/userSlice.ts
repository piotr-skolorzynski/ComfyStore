import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ILoginUserResponse, IStoreUser, IUserState } from "../../models";
import { toast } from "react-toastify";

type ThemeConfig = Record<string, string>;

const themes = {
  winter: "winter",
  dracula: "dracula",
} as const satisfies ThemeConfig;

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);

  return theme;
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
} as IUserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      state: IUserState,
      action: PayloadAction<ILoginUserResponse>,
    ) => {
      const user: IStoreUser = {
        ...action.payload.user,
        token: action.payload.jwt,
      };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state: IUserState) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state: IUserState) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === winter ? dracula : winter;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
