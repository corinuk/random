import React from "react";

function LoginBtn({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Kakao Log In</button>
    </div>
  );
}

export default LoginBtn;
