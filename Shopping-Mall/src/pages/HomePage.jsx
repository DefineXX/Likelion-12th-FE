import { Link } from "react-router-dom";
import "./homepage.css";
import Header from "../components/header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <section className="main-content">
        <Link to="/items">
          <div className="click-box items">
            {/* <img
              src="src/assets/barcode.png"
              alt="barcode"
              className="barcode"
            /> */}
            <h2 className="box-title">Shop & Upload Items</h2>
            <p className="description">
              내가 원하는 상품을 검색하고 등록까지 편리하게!
            </p>
          </div>
        </Link>
        <Link to="/members">
          <div className="click-box members">
            <h2 className="box-title">Members</h2>
            <p className="description">사용자 등록과 조회</p>
          </div>
        </Link>
        <Link to="/orders">
          <div className="click-box orders">
            <h2 className="box-title">Orders</h2>
            <p className="description">주문 등록과 조회</p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
