import { Link } from "react-router-dom";
import "../styles/header.css";
const Header = ({ logo }) => {
  return (
    <div>
      <nav className="header-container">
        <div>
          <img src={logo} className="header__logo" />
        </div>
        <div className="header__list">
          <ul>
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/menu"} className="link">
                Menu
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
