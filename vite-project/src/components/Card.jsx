import { useNavigate } from "react-router-dom";
import "../styles/card.css";

const Card = ({ link, header, price, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
    >
      <div className="card-container">
        <img className="card__image" src={link} />
        <h3 className="card__header">{header}</h3>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
