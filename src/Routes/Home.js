import React from "react";
import Groups from "../Components/Groups";
import Topbar from "../Components/Topbar";
import styles from "./Home.module.css";
import { GoThreeBars, GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function Home() {
  const myStorage = window.localStorage;
  const itemsInStorage = JSON.parse(localStorage.getItem("JoinedGroup"));
  const allGroupListsInStorage = JSON.parse(localStorage.getItem("groupsList"));

  const groupId = 0;

  const navigate = useNavigate();

  const onClickCreateBtn = () => {
    window.location.href = "/create_group";
  };
  const onClickMypageBtn = () => {
    navigate("/mypage", { state: { groupId } });
    window.location.href = "/mypage";
  };

  if (!itemsInStorage) myStorage.setItem("JoinedGroup", JSON.stringify({}));
  if (!allGroupListsInStorage) {
    const allGroupListsInStorage = {};

    allGroupListsInStorage[1660484658333] = {
      title: "코딩모임1",
      category: "코딩1",
      time: "몇시1",
      place: "어디1",
      current: 1,
      max: 4,
    };
    allGroupListsInStorage[1660484658334] = {
      title: "코딩모임2",
      category: "코딩2",
      time: "몇시2",
      place: "어디2",
      current: 1,
      max: 4,
    };
    allGroupListsInStorage[1660484658335] = {
      title: "코딩모임3",
      category: "코딩3",
      time: "몇시3",
      place: "어디3",
      current: 1,
      max: 4,
    };

    myStorage.setItem("groupsList", JSON.stringify(allGroupListsInStorage));
  }

  return (
    <div>
      <Topbar />
      <div className={styles.setting_div}>
        <button className={styles.setting} onClick={onClickMypageBtn}>
          <GoThreeBars />
        </button>
      </div>
      <div className={styles.make_new_group_div}>
        <button className={styles.make_new_group} onClick={onClickCreateBtn}>
          <GoPlus />
        </button>
      </div>
      {/* setting page 있는 거 잊지말자...! */}
      {/* setting page 있는 거 잊지말자...! */}
      {/* setting page 있는 거 잊지말자...! */}
      {/* setting page 있는 거 잊지말자...! */}
      {/* setting page 있는 거 잊지말자...! */}
      <Groups />
    </div>
  );
}

export default Home;
