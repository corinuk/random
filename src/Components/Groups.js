import React from "react";
import styles from "./Groups.module.css";
import { useNavigate } from "react-router-dom";

function Groups() {
  const navigate = useNavigate();

  const allGroupListsInStorage = JSON.parse(localStorage.getItem("groupsList"));

  const onClickGroupAtHome = (groupId) => {
    navigate(`/group_${groupId}`);
  };

  return (
    <div>
      {Object.keys(allGroupListsInStorage).map((groupId, idx) => (
        <div
          onClick={() => onClickGroupAtHome(groupId)}
          className={styles.title_div}
          key={idx}
        >
          <div className={styles.title}>
            {allGroupListsInStorage[groupId].title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Groups;
