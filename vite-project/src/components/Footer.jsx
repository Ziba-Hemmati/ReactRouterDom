import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__icons">
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="footer__content">
        <p>@2021 IndeanFooood.com</p>
      </div>
    </div>
  );
};

export default Footer;
