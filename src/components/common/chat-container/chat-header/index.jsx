import React from "react";
import Label from "../../label/Label";
import styles from "./style.module.css";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeChat } from "../../../../store/slices/chat-slice";
import { useChatStore } from "../../../../store/chatStore";

const ChatHeader = () => {
  const { selectedChatData, selectedChatType } = useSelector(
    (state) => state.chat
  );
  const dispatch = useDispatch();
  // const { selectedChatData, selectedChatType, closeChat } = useChatStore();

  const closeContactPage = () => {
    dispatch(closeChat());
  };

  console.log("selectedChatData", selectedChatData);

  return (
    <div className={styles.chat_header_container}>
      <div className={styles.contactName_container}>
        {selectedChatType === "contact" && (
          <div className={styles.contact_container}>
            <img
              src="../src/assets/svg/client1.svg"
              alt="feature1"
              className={styles.logo_img}
              loading="lazy"
            />
            <div className={styles.contactLabel}>
              <span>{selectedChatData.name ?? selectedChatData.email}</span>
              {/* <Label>{selectedChatData.email}</Label> */}
            </div>
          </div>
        )}
      </div>
      <div onClick={closeContactPage} className={styles.closeBtn_container}>
        <FaXmark size={20} />
      </div>
    </div>
  );
};

export default ChatHeader;
