import Cards from "../../components/cards/Cards";
import NavBar from "../../components/navbar/NavBar";
const Home = () => {
  return (
    <div className="flex-auto pb-8">
      <p id="up"> </p>
      <NavBar />
      <div className=" flex-auto justify-start">
        <div className="bg-lime-600 py-8">
          <h2 id="about">About</h2>
          <p>
            soy un pernosa que no sabe que hacer, pero quiero tener un mejor
            estilo de vida y ser feliz
          </p>
          <a href="#up">up</a>
        </div>
        <div className="bg-sky-500 py-8">
          <h2 id="skills">Skills</h2>
          <p>aqui van a ir las tecnologias que "manejo"</p>
          <a href="#up">up</a>
        </div>
        <div className="bg-violet-600 py-8">
          <h2 id="proyects">Proyects</h2>
          <p> a qui van a ir los proyectos que tengo</p>
          <Cards />
          <a href="#up">up</a>
        </div>

        <div className="bg-rose-600 py-8">
          <h2 id="contacto">Contactame</h2>
          <p>aqui va com me pueden contactar</p>
          <a href="#up">up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
