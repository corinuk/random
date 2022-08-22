import React from "react";
import styles from "./SubmitBtn.module.css";

function SubmitBtn(props) {
  return (
    <div className={styles.submit_div}>
      <input
        className={styles.submit}
        type={"submit"}
        value={props.value}
        onClick={props.onClick}
      />
    </div>
  );
}

export default SubmitBtn;
