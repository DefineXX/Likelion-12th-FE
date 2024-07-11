import { Link } from "react-router-dom";
import { axiosInstance } from "../api";
import "./homepage.css";
import Header from "../components/header/Header";

function HomePage() {
  async function getItemList() {
    const response = await axiosInstance.get(".../items");
  }

  return (
    <>
      <Header />
      <section className="main-content">
        <Link to="/items">
          <div className="click-box">
            <div className="box-title">Items</div>
            <p>상품 등록과 조회, 재고 관리 등</p>
          </div>
        </Link>
        <Link to="/members">
          <div className="click-box">
            <div className="box-title">Members</div>
            <p>사용자 등록과 조회</p>
          </div>
        </Link>
        <Link to="/orders">
          <div className="click-box">
            <div className="box-title">Orders</div>
            <p>주문 등록과 조회</p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
