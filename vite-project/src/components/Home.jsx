import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container ">
        <h2>Food Corner</h2>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
