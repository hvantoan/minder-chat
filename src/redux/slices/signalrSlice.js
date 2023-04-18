import { createSlice } from "@reduxjs/toolkit";
import { connectSignalrAction } from "../thunks/signalrThunk";
import { sendMessageAction } from "../thunks/messageThunk";

const signalrSlice = createSlice({
  name: "signalr",
  initialState: {
    isLoading: false,
    messages: [],
    conversations: [],
    connection: undefined,
    isConnected: false,
    conversation: { Id: undefined },
  },
  reducers: {
    onReceiveListMessage(state, action) {
      if (action.payload.Messages) state.messages = action.payload.Messages;
    },
    onReceiveConversation(state, action) {
      if (action.payload.Conversations)
        state.conversations = action.payload.Conversations;
    },
    onReceiveMessage(state, action) {
      state.messages.push(action.payload);
    },

    onClickConversation(state, action) {
      state.conversation = action.payload;
      state.messages = [];
      state.connection.invoke("JoinToRoom", state.conversation.Id);
    },
    onReceiveLastConversationId(state, action) {
      const conversations = state.conversations.filter(
        (el) => el.Id === action.payload
      );
      if (conversations) {
        state.conversation = conversations[0];
        console.log("Join Room:", state.conversation.Id);
        state.messages = [];
        state.connection.invoke("JoinToRoom", state.conversation.Id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectSignalrAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connectSignalrAction.fulfilled, (state, action) => {
        state.connection = action.payload;
        state.isConnected = true;
        state.isLoading = false;
      })
      .addCase(connectSignalrAction.rejected, (state, action) => {
        console.error(action.error);
        state.isLoading = false;
      });
    //Send Message
    builder
      .addCase(sendMessageAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessageAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(sendMessageAction.rejected, (state, action) => {
        console.error(action.error);
        state.isLoading = false;
      });
  },
});
export const {
  connect,
  startConnection,
  stopConnection,
  onReceiveListMessage,
  onReceiveMessage,
  onReceiveConversation,
  onClickConversation,
  onReceiveLastConversationId,
} = signalrSlice.actions;
export default signalrSlice.reducer;

export const selecteSignalr = (state) => state?.signalr;
