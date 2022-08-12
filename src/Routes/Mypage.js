import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Mypage() {
  const date = new Date();
  const currentTime = date.getTime();
  const myStorage = window.localStorage;
  const itemInStorage = JSON.parse(localStorage.getItem("JoinedGroup"));

  const navigate = useNavigate();
  const [selfMadeGroup, setSelfMadeGroup] = useState({});
  const [joinedGroup, setJoinedGroup] = useState(itemInStorage);
  const {
    state: { group_id },
  } = useLocation();

  const onClickChatting = () => {
    window.location.href = "/chatting";
  };
  const onClickDel = () => {
    const del = window.confirm("for real?");
    if (del) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };
  const addJoinedGroupOnMypage = () => {
    if (group_id != 0) {
      setJoinedGroup((current) => {
        let newJoinedGroup = { ...current };
        newJoinedGroup[currentTime] = group_id;
        return newJoinedGroup;
      });
    }
  };
  const setJoinedGroupOnLocalStorage = () => {
    myStorage.setItem("JoinedGroup", JSON.stringify(joinedGroup));
  };

  useEffect(() => {
    addJoinedGroupOnMypage();
  }, [group_id]);
  useEffect(() => {
    setJoinedGroupOnLocalStorage();
  }, [joinedGroup]);

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <div>
        {Object.keys(selfMadeGroup).length !== 0 ? (
          <div>
            <h3>내가 만든 모임</h3>
            <div>
              <h4>방 제목</h4>
              <div>취미 및 관심사</div>
              <div>장소</div>
              <div>시간</div>
              <div>현재인원 / 최대인원</div>
            </div>
            <button onClick={onClickChatting}>채팅방</button>
            <button onClick={onClickDel}>모임 나가기</button>
            <hr></hr>
          </div>
        ) : null}
        <div>
          <h3>예약한 모임</h3>
          {itemInStorage
            ? Object.keys(itemInStorage).map((id, idx) => (
                <div key={idx}>
                  <div>
                    <h4>방 제목{id}</h4>
                    <div>취미 및 관심사</div>
                    <div>장소</div>
                    <div>시간</div>
                    <div>현재인원 / 최대인원</div>
                  </div>
                  <button onClick={onClickChatting}>채팅방</button>
                  <button onClick={onClickDel}>모임 나가기</button>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
