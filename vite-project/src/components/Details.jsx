import { useParams } from "react-router-dom";
import { data } from "../JS/data";
import Card from "./Card";

const Details = () => {
  const params = useParams();
  const item = data.find((item) => item.id === Number(params.id));
  return (
    <div>
      <Card link={item?.imageLink} header={item?.header} price={item?.price} />
    </div>
  );
};

export default Details;
