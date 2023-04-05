import { HubConnectionBuilder } from "@microsoft/signalr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  onReceiveConversation,
  onReceiveMessage,
} from "../slices/signalrSlice";

export const connectSignalrAction = createAsyncThunk(
  "signalr/connect",
  async (token, { getState, dispatch }) => {
    if (!token) {
      throw new Error("No auth token available");
    }

    const connection = new HubConnectionBuilder()
      .withUrl(`https://localhost:8100/hubs/chat?accessToken=${token}`)
      .withAutomaticReconnect()
      .build();

    connection.on("newMessage", (message) => {
      dispatch(onReceiveMessage(message));
    });

    connection.on("Conversations", (message) => {
      dispatch(onReceiveConversation(message));
    });

    await connection.start();

    return connection;
  }
);
