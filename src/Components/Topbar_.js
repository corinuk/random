import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Topbar_.module.css";
import { IoArrowBackOutline } from "react-icons/io5";

function Topbar_(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.create_group_top_bar}>
        <span className={styles.create_group_top_bar_title}>{props.title}</span>
      </div>
      <div className={styles.back_btn_div}>
        <button
          className={styles.back_btn}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBackOutline />
        </button>
      </div>
    </div>
  );
}

export default Topbar_;
