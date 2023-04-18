import { createAsyncThunk } from "@reduxjs/toolkit";
import messageApi from "../../api/messageApi";

export const sendMessageAction = createAsyncThunk(
  "app/sendMessage",
  async (body, { rejectWithValue, getState, dispatch }) => {
    try {
      await messageApi.sendMessage(body);
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
