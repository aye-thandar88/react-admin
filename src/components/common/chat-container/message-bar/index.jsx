import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import Input from "../../input/Input";
import { FaPaperclip, FaFaceSmile, FaPaperPlane } from "react-icons/fa6";
import Button from "../../button/Button";
import EmojiPicker from "emoji-picker-react";
import { useSocket } from "../../../../context/SocketContext";
import { useSelector } from "react-redux";
import { useAuth } from "../../../../context/AuthContext";
import { useChatStore } from "../../../../store/chatStore";

const MessageBar = () => {
  const emojiRef = useRef();
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [emjPickerOpen, setEmjPickerOpen] = useState(false);
  const { selectedChatType, selectedChatData } = useSelector(
    (state) => state.chat
  );
  // const {selectedChatData,selectedChatType} = useChatStore()
  const { userInfo } = useAuth();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (emojiRef.current && !emojiRef.current.contains(e.target)) {
        setEmjPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.addEventListener("mousedown", handleClickOutSide);
    };
  }, [emojiRef]);

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji);
  };

  const handleSendMessage = async () => {
    if (!socket) {
      console.error("Socket is not connected.");
    } else {
      if (selectedChatType === "contact") {
        try {
          socket?.emit("sendMessage", {
            sender: userInfo.id,
            content: message,
            recipient: selectedChatData.id,
            messageType: "text",
            fileUrl: undefined,
          });
          console.log("Message sent!");
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }
    }
  };

  return (
    <div className={styles.messageBar_container}>
      <div className={styles.input_container}>
        <Input
          type={"text"}
          value={message}
          placeholder={"Enter Message"}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.message_input}
        />
        <Button className={styles.attach_btn}>
          <FaPaperclip />
        </Button>
        <div style={{ position: "relative" }}>
          <Button
            className={styles.attach_btn}
            onClick={() => setEmjPickerOpen(!emjPickerOpen)}
          >
            <FaFaceSmile />
          </Button>
          <div
            ref={emojiRef}
            style={{ position: "absolute", bottom: "7vh", right: "0" }}
          >
            <EmojiPicker
              theme="dark"
              open={emjPickerOpen}
              onEmojiClick={handleAddEmoji}
              autoFocusSearch={false}
              lazyLoadEmojis={true}
            />
          </div>
        </div>
      </div>
      <Button className={styles.attach_btn} onClick={handleSendMessage}>
        <FaPaperPlane />
      </Button>
    </div>
  );
};

export default MessageBar;
