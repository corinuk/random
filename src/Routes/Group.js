import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Group() {
  const navigate = useNavigate();
  const { group_id } = useParams();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </button>
      </div>
      <div>{group_id}</div>
      <div>시간, 날짜, 장소 등등.</div>
      <div>
        <button>참가 신청</button>
      </div>
    </div>
  );
}

export default Group;
