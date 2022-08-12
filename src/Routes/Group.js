import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Group() {
  const navigate = useNavigate();
  const { group_id } = useParams();
  const a = "a";

  const onClickJoinBtn = () => {
    const join = window.confirm("For real?");

    if (join) {
      alert("완료");
      navigate("/mypage", { state: { group_id } });
      window.location.href = "/";
    }
  };

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
        <button onClick={onClickJoinBtn}>참가 신청</button>
      </div>
    </div>
  );
}

export default Group;
