import { createSlice } from "@reduxjs/toolkit";
import { getConversationAction } from "../thunks/conversationThunk";

const initialData = {
  conversations: undefined,
  loading: false,
  appError: undefined,
  serverError: undefined,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState: initialData,
  extraReducers: (builder, state) => {
    //Get
    builder
      .addCase(getConversationAction.pending, (state, action) => {
        state.loading = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(getConversationAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = action?.payload;
        state.isAuth = true;
        state.appError = undefined;
        state.serverError = undefined;
      })
      .addCase(getConversationAction.rejected, (state, action) => {
        state.loading = false;
        state.appError = action?.payload.message;
        state.serverError = action?.error?.message;
      });
  },
});
