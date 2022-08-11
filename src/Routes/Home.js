import React from "react";
import Groups from "./Groups";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>home</h1>
      </div>
      <div>
        <Link to={`/create_group`}>만들기</Link>
        <Link to={`/mypage`}>마이페이지</Link>
        <Link to={`/setting`}>설정</Link>
      </div>
      <Groups />
    </div>
  );
}

export default Home;
