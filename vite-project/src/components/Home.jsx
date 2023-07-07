import "../styles/home.css";
import Button from "./Button";

const Home = () => {
  return (
    <div>
      <div className="home-container ">
        <h2>Food Corner</h2>
        <p>INDIAN FOOD AT A CLICK</p>
        <Button text="ORDER NOW" />
      </div>
    </div>
  );
};

export default Home;
