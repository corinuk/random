import React from "react";
import { useNavigate } from "react-router-dom";

function Chatting() {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <div>Chatting</div>
    </div>
  );
}

export default Chatting;
