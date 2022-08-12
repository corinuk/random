import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Groups from "./Groups";

function Home() {
  const group_id = 0;

  const navigate = useNavigate();

  const onClickCreateBtn = () => {
    window.location.href = "/create_group";
  };
  const onClickMypageBtn = () => {
    navigate("/mypage", { state: { group_id } });
    window.location.href = "/mypage";
  };
  const onClickSettingBtn = () => {
    window.location.href = "/setting";
  };

  return (
    <div>
      <div>
        <h1>home</h1>
      </div>
      <div>
        <button onClick={onClickCreateBtn}>만들기</button>
        <button onClick={onClickMypageBtn}>마이페이지</button>
        <button onClick={onClickSettingBtn}>설정</button>
      </div>
      <Groups />
    </div>
  );
}

export default Home;
