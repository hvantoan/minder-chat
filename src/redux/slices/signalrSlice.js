import { createSlice } from "@reduxjs/toolkit";
import { connectSignalrAction } from "../thunks/signalrThunk";

const signalrSlice = createSlice({
  name: "signalr",
  initialState: {
    messages: undefined,
    conversations: [],
    connection: null,
    isConnected: false,
  },
  reducers: {
    onReceiveMessage(state, action) {
      state.messages.push(action.payload);
    },
    onReceiveConversation(state, action) {
      state.conversations = action.payload.Conversations;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectSignalrAction.fulfilled, (state, action) => {
        state.connection = action.payload;
        state.isConnected = true;
      })
      .addCase(connectSignalrAction.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});
export const {
  connect,
  startConnection,
  stopConnection,
  onReceiveMessage,
  onReceiveConversation,
} = signalrSlice.actions;
export default signalrSlice.reducer;

export const selecteSignalr = (state) => state?.signalr;
