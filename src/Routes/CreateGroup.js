import React from "react";
import { useNavigate } from "react-router-dom";

function CreateGroup() {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/create_group/complete";
  };

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
        <form onSubmit={onSubmit}>
          <input placeholder="방 제목" required />
          <br />
          <input placeholder="취미 및 관심사" required />
          <br />
          <input placeholder="장소" required />
          <br />
          <input placeholder="시간" required />
          <br />
          <input placeholder="최대 인원" required />
          <br />
          <input type={"submit"} value={"만들기"} />
        </form>
      </div>
    </div>
  );
}

export default CreateGroup;
