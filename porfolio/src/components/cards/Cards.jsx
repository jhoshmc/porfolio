import { proyects } from "../../data.json";
import Card from "../card/Card";

const Cards = () => {
  return (
    <section className="container">
      <article>
        <h2 id="proyects" className="">
          Mis Proyectos
        </h2>
        <div className=" ">
          {proyects.map((p) => (
            <Card key={p.id} proyecto={p} />
          ))}
        </div>
      </article>
      <a href="/">⬆️</a>
    </section>
  );
};

export default Cards;
