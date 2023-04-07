import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserAction,
  logoutAction,
  registerUserAction,
} from "../thunks/authThunk";
const initialState = {
  isAuth: false,
  userAuth: undefined,
  loading: false,
  appError: false,
  serverError: false,
};

const authSlices = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSection(state, action) {
      state.userAuth = action?.payload;
      state.isAuth = true;
      state.appError = undefined;
      state.serverError = undefined;
    },
  },
  extraReducers: (builder, state) => {
    //Login
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = action?.payload;
        state.isAuth = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload.message;
        state.serverError = action?.error?.message;
      });
    //Logout
    builder
      .addCase(logoutAction.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = undefined;
        state.isAuth = false;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload.message;
        state.serverError = action?.error?.message;
      });
    //Register
    builder
      .addCase(registerUserAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = action?.payload;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload.message;
        state.serverError = action?.error?.message;
      });
  },
});
export const { loginSection } = authSlices.actions;
export default authSlices.reducer;

export const selectAuth = (state) => state?.auth;
