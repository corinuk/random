import React from "react";
import { useNavigate } from "react-router-dom";

function Setting() {
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
      Setting
    </div>
  );
}

export default Setting;
