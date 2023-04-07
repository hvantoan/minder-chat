import { createAsyncThunk } from "@reduxjs/toolkit";
import messageApi from "../../api/messageApi";

export const sendMessageAction = createAsyncThunk(
  "app/sendMessage",
  async (body, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await messageApi.sendMessage(body);
      console.log(data);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
