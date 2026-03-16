import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserState } from "../../models";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);

  return theme;
};

const initialState = {
  user: { username: "Skolo" },
  theme: getThemeFromLocalStorage(),
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
      console.log("state: ", state);

      const { dracula, winter } = themes;
      state.theme = state.theme === winter ? dracula : winter;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
