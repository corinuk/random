import React from "react";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      My page
    </div>
  );
}

export default Mypage;
