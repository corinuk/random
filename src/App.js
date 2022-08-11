import { useState } from "react";
import "./App.css";
import LoginBtn from "./Components/LogInBtn";
import Router from "./Routes/Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onLogInBtnClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Router /> : <LoginBtn onClick={onLogInBtnClick} />}
    </div>
  );
}

export default App;
