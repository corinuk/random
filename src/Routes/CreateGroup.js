import React, { useEffect, useState } from "react";
import styles from "./CreateGroup.module.css";
import Topbar_ from "../Components/Topbar_";
import SubmitBtn from "../Components/SubmitBtn";

function CreateGroup() {
  const date = new Date();
  const myStorage = window.localStorage;
  const itemsInStorage = JSON.parse(localStorage.getItem("JoinedGroup"));
  const allGroupListsInStorage = JSON.parse(localStorage.getItem("groupsList"));

  const [joinedGroup, setJoinedGroup] = useState(itemsInStorage);

  const onSubmit = (event) => {
    event.preventDefault();

    const groupId = date.getTime();
    const title = event.target[0].value;
    const category = event.target[1].value;
    const time = event.target[2].value;
    const place = event.target[3].value;
    const current = 1;
    const max = event.target[4].value;

    setJoinedGroup((prev) => {
      let newJoinedGroup = { ...prev };
      newJoinedGroup[groupId] = {
        title,
        category,
        time,
        place,
        current,
        max,
      };
      return newJoinedGroup;
    });

    allGroupListsInStorage[groupId] = {
      title,
      category,
      time,
      place,
      current,
      max,
    };
    myStorage.setItem("groupsList", JSON.stringify(allGroupListsInStorage));

    window.location.href = "/create_group/complete";
  };

  const addJoinedGroup = () => {
    myStorage.setItem("JoinedGroup", JSON.stringify(joinedGroup));
  };

  useEffect(() => {
    addJoinedGroup();
  }, [joinedGroup]);

  return (
    <div>
      <Topbar_ title={"그룹 만들기"} />
      <div>
        <form onSubmit={onSubmit}>
          <div className={styles.title_div}>
            <span className={styles.title_span}>방 제목</span>
            <input className={styles.title} onSubmit={onSubmit} required />
          </div>
          <div className={styles.category_div}>
            <span className={styles.category_span}>취미/관심사</span>
            <input className={styles.category} required />
          </div>
          <div className={styles.time_div}>
            <span className={styles.time_span}>시간</span>
            <input className={styles.time} required />
          </div>
          <div className={styles.place_div}>
            <span className={styles.place_span}>장소</span>
            <input className={styles.place} required />
          </div>
          <div className={styles.max_div}>
            <span className={styles.max_span}>최대 인원</span>
            <input className={styles.max} type={"number"} required />
          </div>
          <SubmitBtn value={"만들기"} />
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
