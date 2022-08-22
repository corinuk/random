import React from "react";
import styles from "./Topbar.module.css";

function Topbar() {
  const onClickTitle = () => {
    window.location.href = "/";
  };
  //   const onClickSettingBtn = () => {
  //     window.location.href = "/setting";
  //   };

  return (
    <div>
      <div className={styles.top_bar}>
        <h1 className={styles.title} onClick={onClickTitle}>
          Project
        </h1>
      </div>
      {/* <div>
          <button onClick={onClickMypageBtn}>마이페이지</button>
        </div> */}
    </div>
  );
}

export default Topbar;
