import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Group from "./Group";
import CreateGroup from "./CreateGroup";
import Mypage from "./Mypage";
import Setting from "./Setting";
import CompleteCreateGroup from "./CompleteCreateGroup";
import Chatting from "./Chatting";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group_:group_id" element={<Group />} />
        <Route path="/create_group" element={<CreateGroup />} />
        <Route
          path="/create_group/complete"
          element={<CompleteCreateGroup />}
        />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/chatting" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
