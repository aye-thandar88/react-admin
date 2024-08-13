import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessage: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedChatType: (state, action) => {
      state.selectedChatType = action.payload;
    },
    setSelectedChatData: (state, action) => {
      state.selectedChatData = action.payload;
    },
    setSelectedChatMessage: (state, action) => {
      state.selectedChatMessage = action.payload;
    },
    closeChat: (state) => {
      state.selectedChatType = undefined;
      state.selectedChatData = undefined;
      state.selectedChatMessage = [];
    },
    addMessage: (state, action) => {
      const selectedChatMessage = state.selectedChatMessage;
      const selectedChatType = state.selectedChatType;
      const message = action.payload;

      state.selectedChatMessage = [
        ...selectedChatMessage,
        {
          ...message,
          recipient:
            selectedChatType === "channel"
              ? message.recipient
              : message.recipient.id,
        },
      ];
    },
  },
});

export const {
  setSelectedChatType,
  setSelectedChatData,
  setSelectedChatMessage,
  closeChat,
} = chatSlice.actions;

export default chatSlice.reducer;
