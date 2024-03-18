import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import gmail from "../../assets/img/gmail.svg";

const Contacto = () => {
  const contact = [
    {
      id: 1,
      name: "linkedin",
      enlace: "https://www.linkedin.com/in/josias-moran-37b320275",
      image: linkedin,
    },
    {
      id: 2,
      name: "github",
      enlace: "https://github.com/jhoshmc",
      image: github,
    },
    {
      id: 3,
      name: "gmail",
      enlace: "mailto:jhoshmc201@gmail.com",
      image: gmail,
    },
  ];

  return (
    <section id="contacto">
      <article>
        <h2>formas de Contactarme</h2>
        <div>
          {contact.map((ct) => (
            <div key={ct.id}>
              <a href={ct.enlace} target="_blank">
                <img src={ct.image} alt={ct.name} className="iconos" />
              </a>
            </div>
          ))}
        </div>
      </article>
      <a href="/">⬆️</a>
    </section>
  );
};

export default Contacto;
