import { HubConnectionBuilder } from "@microsoft/signalr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  onReceiveConversation,
  onReceiveListMessage,
  onReceiveMessage,
} from "../slices/signalrSlice";
import { isValidToken } from "../../utils/jwt";
import { logoutAction } from "./authThunk";

export const connectSignalrAction = createAsyncThunk(
  "signalr/connect",
  async (token, { getState, dispatch }) => {
    if (!token) {
      throw new Error("No auth token available");
    }
    if (!isValidToken(token)) dispatch(logoutAction());
    const connection = new HubConnectionBuilder()
      .withUrl(`https://localhost:8100/hubs/chat?accessToken=${token}`)
      .withAutomaticReconnect()
      .build();

    connection.on("ReciveListMessage", (message) => {
      dispatch(onReceiveListMessage(message));
    });

    connection.on("ReciveMessage", (message) => {
      dispatch(onReceiveMessage(message));
    });

    connection.on("Conversations", (message) => {
      dispatch(onReceiveConversation(message));
    });

    await connection.start();

    return connection;
  }
);
