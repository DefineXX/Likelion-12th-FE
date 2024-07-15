import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Members from "./components/members/Members";
import Items from "./components/items/Items";
import Orders from "./components/orders/Orders";
import RegisterMembers from "./components/members/RegisterMembers";
import MyPage from "./components/mypage/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<Items />} />
          <Route path="/members" element={<Members />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<RegisterMembers />} />
          <Route path="/mypage" element={<MyPage />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
