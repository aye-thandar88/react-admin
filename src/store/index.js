import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chat-slice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
