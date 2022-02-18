import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: { token: "" },
  userData: {},
  AppData: {},
  errors: [],
};

export const userState = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action?.payload;
    },
    setAppData: (state, action) => {
      state.AppData = action?.payload;
    },
    setAccessToken: (state, action) => {
      state.authData.token = action?.payload;
    },
    setErrors: (state, action) => {
      state.errors = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, setAppData, setAccessToken, setErrors } =
  userState.actions;

export default userState.reducer;
