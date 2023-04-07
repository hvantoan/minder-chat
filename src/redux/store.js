import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import authReducer from "./slices/authSlice";
import signalRSlice from "./slices/signalrSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    auth: authReducer,
    signalr: signalRSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
