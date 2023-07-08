import { useParams } from "react-router-dom";
import { data } from "../JS/data";
import "../styles/details.css";

const Details = () => {
  const params = useParams();
  const item = data.find((item) => item.id === Number(params.id));
  const link = item?.imageLink;
  const header = item?.header;
  const price = item?.price;
  const description = item?.description;
  return (
    <div className="details-container">
      <div className="details__card">
        <img className="details__image" src={link} />
        <div className="details__content">
          <h3>{header}</h3>
          <p>{price}</p>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
