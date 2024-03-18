import Cards from "../../components/cards/Cards";
import About from "../../components/info/About";
import Contacto from "../../components/info/Contacto";
import Skills from "../../components/info/Skills";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <article className="">
      <header>
        <h1>Josias Móran</h1>
        <NavBar />
      </header>

      <About />
      <Skills />
      <Cards />
      <Contacto />
      <footer>
        <p>
          <small>©josh Dev 2024 inc. All rights reserved</small>
        </p>
      </footer>
    </article>
  );
};

export default Home;
