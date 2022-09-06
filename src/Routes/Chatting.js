import React from "react";
import Topbar_ from "../Components/Topbar_";
import styles from "./Chatting.module.css";
import { IoSend } from "react-icons/io5";

function Chatting() {
  return (
    <div>
      <Topbar_ title={"채팅방"} />
      <div className={styles.chatting_room}>
        <div className={styles.message_input_div}>
          <input className={styles.message_input} placeholder="입력" />
          <IoSend className={styles.send_btn} />
        </div>
      </div>
    </div>
  );
}

export default Chatting;
