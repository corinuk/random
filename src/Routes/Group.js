import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubmitBtn from "../Components/SubmitBtn";
import Topbar_ from "../Components/Topbar_";

function Group() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const itemsInStorage = JSON.parse(localStorage.getItem("JoinedGroup"));
  const allGroupListsInStorage = JSON.parse(localStorage.getItem("groupsList"));

  const { title, category, time, place, current, max } =
    allGroupListsInStorage[groupId];

  const onClickJoinBtn = () => {
    if (!Object.keys(itemsInStorage).includes(groupId)) {
      const join = window.confirm(`${title} 에 참가하시겠습니까?`);
      if (join) {
        alert("완료");
        navigate("/mypage", {
          state: { groupId, title, category, time, place, current, max },
        });
        window.location.href = "/";
      }
    } else if (Object.keys(itemsInStorage).includes(groupId)) {
      alert("이미 가입한 모임입니다.");
    }
  };

  return (
    <div>
      <Topbar_ title={title} />
      <div>{category}</div>
      <div>{time}</div>
      <div>{place}</div>
      <div>
        {current} / {max}
      </div>
      <SubmitBtn onClick={onClickJoinBtn} value={"참가 신청"} />
    </div>
  );
}

export default Group;
