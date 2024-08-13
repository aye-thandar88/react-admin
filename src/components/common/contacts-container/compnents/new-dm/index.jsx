import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../tooltip";
import { FaPlus } from "react-icons/fa6";
import styles from "./style.module.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../dialog";
import Input from "../../../input/Input";
import EmptyChatContainer from "../../../empty-chat-container";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { postApi } from "../../../../../api";
import Label from "../../../label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedChatData,
  setSelectedChatType,
} from "../../../../../store/slices/chat-slice";

const NewDM = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [searchContacts, setSearchContacts] = useState([]);

  const { selectedChatData } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const searchContact = async (searchTerm) => {
    try {
      const response = await postApi("/users/searchContact", { searchTerm });
      const result = await response.data;

      if (!result) {
        setSearchContacts([]);
      }
      setSearchContacts(result);
    } catch (err) {
      console.log(err);
    }
  };

  const selectNewContact = (contact) => {
    setOpenDialog(false);
    setSearchContacts([]);
    dispatch(setSelectedChatType("contact"));
    dispatch(setSelectedChatData(contact));
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={styles.btn_trigger}
            onClick={() => setOpenDialog(true)}
          >
            <FaPlus />
          </TooltipTrigger>
          <TooltipContent className={styles.tooltip_text}>
            Select new contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Please select a contact</DialogTitle>
            <DialogDescription>
              <Input
                type={"text"}
                placeholder={"Search Contacts"}
                className={styles.search_user}
                onChange={(e) => {
                  searchContact(e.target.value);
                }}
              />
              {searchContacts <= 0 ? (
                <EmptyChatContainer description="Hi! Search new Contact." />
              ) : (
                <div className={styles.contactList_container}>
                  {searchContacts?.map((contact) => {
                    return (
                      <div
                        key={contact.id}
                        className={styles.contact_container}
                        onClick={() => selectNewContact(contact)}
                      >
                        <img
                          src="../../src/assets/svg/client1.svg"
                          alt="feature1"
                          className={styles.logo_img}
                          loading="lazy"
                        />
                        <div className={styles.contactLabel}>
                          <Label>{contact.name ?? contact.email}</Label>
                          <span>{contact.email}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewDM;
