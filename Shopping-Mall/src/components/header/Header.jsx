import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header className="main-header">
        <Link to="/">
          <h2 className="header-title">Wanna Shop?</h2>
        </Link>
        <div className="option-container">
          <div className="option-login">
            <Link to="/login">
              <h3 className="login-btn">Login/Register</h3>
            </Link>
          </div>
          <div className="option-mypage">
            <Link to="/mypage">
              <h3 className="mypage-btn">My Page</h3>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
