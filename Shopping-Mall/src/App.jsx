import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Members from "./components/members/Members";
import ItemList from "./components/items/ItemList";
import Orders from "./components/orders/Orders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/members" element={<Members />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
