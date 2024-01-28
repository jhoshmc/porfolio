import { proyects } from "../../data.json";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="flex items-center">
      {proyects.map((p) => (
        <Card key={p.id} proyecto={p} />
      ))}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cards;
