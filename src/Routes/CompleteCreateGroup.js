import React from "react";
import styles from "./CompleteCreateGroup.module.css";
import Topbar_ from "../Components/Topbar_";
import SubmitBtn from "../Components/SubmitBtn";
import { useNavigate } from "react-router-dom";

function CompleteCreateGroup() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Topbar_ title={"만들기 완료"} />
      <div className={styles.complete_div}>
        <div className={styles.complete_text_div}>
          <div className={styles.complete_text}>모임이 만들어졌습니다</div>
        </div>
        <SubmitBtn value={"확인"} onClick={onClick} />
      </div>
    </div>
  );
}

export default CompleteCreateGroup;
