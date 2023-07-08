import { data } from "../JS/data";
import Card from "./Card";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div>
      <div className="menu-container">
        <h2>Our Menu</h2>
        <div className="card">
          {data.map((item) => {
            return (
              <Card
                link={item?.imageLink}
                header={item?.header}
                price={item?.price}
                id={item?.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
