// import logo from "../../assets/mainIconsdark.svg";
import logo from "../../assets/img/dibujo_programador.png";
import CvPdf from "../../assets/JosiasCV.pdf";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CvPdf;
    link.download = "Cv Josias";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about">
      <article>
        <div>
          <h2>About</h2>

          <p>
            Hola, mi nombre es Josías Moran, soy un desarrollador Full Stack con
            la capacidad de realizar proyectos completos (implementando base de
            datos , frond-end, back-end). Busco la oportunidad de adquirir
            experiencia real y continuar formándome en este mundo del
            desarrollo. Soy una persona sociable (aunque por ratos no lo
            parezca), empática, respetuosa. me gusta aprender de los demás y si
            es que esta en mi posibilidad colaborar con ellos. Manejo
            tecnologías como JavaScript, Node.js, Express.js, PostgreSQL,
            Sequelize, React.js, Redux, Tailwind css, GitHub. además estoy
            dispuesto a aprender otras tecnologías. Si capte tu atención me
            puedes contactar conmigo, muchas gracias por y que tengas un buen
            día 😁
          </p>
          <button onClick={handleDownloadCV}>Descargar CV</button>
        </div>

        <div>
          <img src={logo} alt="Mi SVG" />
        </div>
      </article>

      <a href="/">⬆️</a>
    </section>
  );
};

export default About;
