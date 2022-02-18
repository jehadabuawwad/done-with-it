import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";

export const rootStore = configureStore({
  reducer: {
    userState: userState,
  },
  devTools: process.env.Environment !== "production",
});
