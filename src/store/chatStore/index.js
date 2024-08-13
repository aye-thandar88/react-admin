import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  selectedChatType: undefined,
  selectedChatData: undefined,
  selectedChatMessage: [],
  setSelectedChatType: (selectedChatType) => {
    set(selectedChatType);
  },
  setSelectedChatData: (selectedChatData) => {
    set(selectedChatData);
  },
  setSelectedChatMessage: (selectedChatMessage) => {
    set(selectedChatMessage);
  },
  closeChat: () => {
    set({
      selectedChatType: undefined,
      selectedChatData: undefined,
      selectedChatMessage: [],
    });
  },
  addMessage: (message) => {
    const selectedChatMessage = get().selectedChatMessage;
    const selectedChatType = get().selectedChatType;

    set({
      selectedChatMessage: [
        ...selectedChatMessage,
        {
          ...message,
          recipient:
            selectedChatType === "channel"
              ? message.recipient
              : message.recipient.id,
        },
      ],
    });
  },
}));
