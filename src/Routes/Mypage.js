import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Mypage() {
  const myStorage = window.localStorage;
  const itemsInStorage = JSON.parse(localStorage.getItem("JoinedGroup"));
  const allGroupListsInStorage = JSON.parse(localStorage.getItem("groupsList"));

  const navigate = useNavigate();
  const [joinedGroup, setJoinedGroup] = useState(itemsInStorage);
  let {
    state: { groupId, title, category, time, place, current, max },
  } = useLocation();

  const onClickChatting = () => {
    navigate("/chatting");
  };
  const onClickDel = (e) => {
    const del = window.confirm("for real?");

    if (del) {
      const groupId = e.target.parentNode.children[0].children[1].innerHTML;
      allGroupListsInStorage[groupId].current -= 1;
      myStorage.setItem("groupsList", JSON.stringify(allGroupListsInStorage));
      const selected =
        e.target.parentNode.childNodes[0].children[1].childNodes[0].data;
      const newJoinedGroup = { ...joinedGroup };
      delete newJoinedGroup[selected];
      setJoinedGroup(newJoinedGroup);
      if (allGroupListsInStorage[groupId].current == 0) {
        delete allGroupListsInStorage[groupId];
        myStorage.setItem("groupsList", JSON.stringify(allGroupListsInStorage));
      }
      window.location.reload();
    }
  };
  const addJoinedGroupOnMypage = () => {
    if (groupId != 0) {
      setJoinedGroup((prev) => {
        let newJoinedGroup = { ...prev };
        newJoinedGroup[groupId] = {
          title,
          category,
          time,
          place,
          current: current + 1,
          max,
        };
        return newJoinedGroup;
      });
      allGroupListsInStorage[groupId].current += 1;
      myStorage.setItem("groupsList", JSON.stringify(allGroupListsInStorage));
    }
  };
  const setJoinedGroupOnLocalStorage = () => {
    myStorage.setItem("JoinedGroup", JSON.stringify(joinedGroup));
  };

  useEffect(() => {
    addJoinedGroupOnMypage();
  }, [groupId]);
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
        ????????????
      </button>
      <div>
        <div>
          {Object.keys(itemsInStorage).length === 0 ? (
            <h4>?????? ?????? ????????? ????????????.</h4>
          ) : null}
          {Object.keys(itemsInStorage).length !== 0 ? (
            <h3>???????????? ??????</h3>
          ) : null}
          {itemsInStorage
            ? Object.keys(itemsInStorage).map((createdTime, idx) => (
                <div key={idx}>
                  <div>
                    <h4>{itemsInStorage[createdTime].title}</h4>
                    <div hidden>{createdTime}</div>
                    <div>{itemsInStorage[createdTime].category}</div>
                    <div>{itemsInStorage[createdTime].time}</div>
                    <div>{itemsInStorage[createdTime].place}</div>
                    <div>
                      {itemsInStorage[createdTime].current} /{" "}
                      {itemsInStorage[createdTime].max}
                    </div>
                  </div>
                  <button onClick={onClickChatting}>?????????</button>
                  <button onClick={(e) => onClickDel(e)}>?????? ?????????</button>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
