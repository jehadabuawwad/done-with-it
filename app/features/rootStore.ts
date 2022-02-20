import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";
import { Environment } from "@env";
export const rootStore = configureStore({
  reducer: {
    userState: userState,
  },
  devTools: Environment !== "production",
});
