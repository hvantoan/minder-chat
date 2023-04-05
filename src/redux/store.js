import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import authReducer from "./slices/authSlice";
import signalRSlice from "./slices/signalrSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    signalr: signalRSlice,
  },
});

export default store;
