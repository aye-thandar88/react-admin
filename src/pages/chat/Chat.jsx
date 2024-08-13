import React from "react";
import styles from "./Chat.module.css";
import ContactsContainer from "../../components/common/contacts-container";
import EmptyChatContainer from "../../components/common/empty-chat-container";
import ChatContainer from "../../components/common/chat-container";
import { useSelector } from "react-redux";

const Chat = () => {
  const { selectedChatType } = useSelector((state) => state.chat);

  return (
    <div className={styles.chatPage}>
      <ContactsContainer />
      {selectedChatType === undefined ? (
        <EmptyChatContainer description="Hi! Welcome to Syncronus Chat App" />
      ) : (
        <ChatContainer />
      )}
    </div>
  );
};

export default Chat;
