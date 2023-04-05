import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { connectSignalrAction } from "./signalrThunk";

//TODO: Login Action
export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await authApi.login(userData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(connectSignalrAction(data.token));
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//TODO: Logout Action
export const logoutAction = createAsyncThunk(
  "/auth/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//TODO: Register Action
export const registerUserAction = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await authApi.register(user);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
