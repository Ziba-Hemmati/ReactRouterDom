import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__icons">
        <Link to="/">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="/">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="/">
          <i className="fa-brands fa-square-facebook"></i>
        </Link>
        <Link to="/">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <div className="footer__content">
        <p>@2021 IndeanFooood.com</p>
      </div>
    </div>
  );
};

export default Footer;
