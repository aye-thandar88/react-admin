import React from "react";
import styles from "./style.module.css";
import ChatHeader from "./chat-header";
import MessageContainer from "./message-container";
import MessageBar from "./message-bar";

const ChatContainer = () => {
  return (
    <div className={styles.chat_container}>
      <ChatHeader />
      <MessageContainer />
      <MessageBar />
    </div>
  );
};

export default ChatContainer;
