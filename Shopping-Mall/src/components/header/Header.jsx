import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header className="main-header">
        <Link to="/">
          <h2 className="header-title">Wanna Shop?</h2>
        </Link>
        <Link to="/members">
          <h3 className="login-btn">Login/Register</h3>
        </Link>
      </header>
    </>
  );
}

export default Header;
