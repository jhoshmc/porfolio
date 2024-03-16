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
    <div id="contacto" className="container mx-auto p-8 text-black text-center">
      <h2 className="text-3xl font-bold mb-4">formas de Contactarme</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contact.map((ct) => (
          <div key={ct.id} className="flex justify-center mt-8">
            <a href={ct.enlace} target="_blank">
              <img src={ct.image} alt={ct.name} className="w-12 h-12 mb-2" />
            </a>
          </div>
        ))}
      </div>
      <a href="/">⬆️</a>
    </div>
  );
};

export default Contacto;
