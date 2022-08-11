import React from "react";
import { Link } from "react-router-dom";

function CompleteCreateGroup() {
  return (
    <div>
      <div>모임이 성공적으로 만들어졌습니다.</div>
      <Link to={"/"}>확인</Link>
    </div>
  );
}

export default CompleteCreateGroup;
