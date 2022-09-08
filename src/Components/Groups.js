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
        <div key={idx}>
          {allGroupListsInStorage[groupId].current ==
          allGroupListsInStorage[groupId].max ? null : (
            <div
              onClick={() => onClickGroupAtHome(groupId)}
              className={styles.title_div}
            >
              <div>
                <div className={styles.title}>
                  {allGroupListsInStorage[groupId].title}
                </div>
                <div className={styles.category}>
                  {allGroupListsInStorage[groupId].category}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Groups;
