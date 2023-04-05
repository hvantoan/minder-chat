import { createAsyncThunk } from "@reduxjs/toolkit";
import conversationApi from "../../api/conversationApi";

export const getConversationAction = createAsyncThunk(
  "conversations/get",
  async (itemId, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await conversationApi.get(itemId);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const listConversationAction = createAsyncThunk(
  "conversations/list",
  async (params, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await conversationApi.list(params);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const createConversationAction = createAsyncThunk(
  "conversations/list",
  async (conversation, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await conversationApi.create(conversation);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updateConversationAction = createAsyncThunk(
  "conversations/list",
  async (conversation, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await conversationApi.create(conversation);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
