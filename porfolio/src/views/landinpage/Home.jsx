import Cards from "../../components/cards/Cards";
import About from "../../components/info/About";
import Contacto from "../../components/info/Contacto";
import Skills from "../../components/info/Skills";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <div className="relative z-10">
      <NavBar />
      <About />
      <Skills />
      <Cards />
      <Contacto />
      <footer className="text-black p-4 text-center">
        <p>©josh Dev 2024 inc. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
