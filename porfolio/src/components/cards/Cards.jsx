import { proyects } from "../../data.json";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="container">
      <h2
        id="proyects"
        className="text-[40px] font-semibold text-black text-center bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-500 py-2 mb-[25px] "
      >
        Mis Proyectos
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyects.map((p) => (
          <Card key={p.id} proyecto={p} />
        ))}
      </div>
      <a href="/">⬆️</a>
    </div>
  );
};

export default Cards;
