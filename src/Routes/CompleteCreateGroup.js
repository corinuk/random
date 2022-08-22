import React from "react";

function CompleteCreateGroup() {
  const onClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div>모임이 성공적으로 만들어졌습니다.</div>
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default CompleteCreateGroup;
