import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: { token: "" },
  userData: {},
  appData: { lists: [] },
  errors: [],
};

export const userState = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action?.payload;
    },
    setAppDataLists: (state, action) => {
      state.appData.lists = action?.payload;
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
export const { setUserData, setAppDataLists, setAccessToken, setErrors } =
  userState.actions;

export default userState.reducer;
