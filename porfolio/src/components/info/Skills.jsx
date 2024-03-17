import HtmlSvg from "../../assets/img/html.png";
import CssSvg from "../../assets/img/css.png";
import JsSvg from "../../assets/img/js.png";
import ReactSvg from "../../assets/img/react.png";
import NodeSvg from "../../assets/img/node-js.png";
import DatabaseSvg from "../../assets/img/postger.png";

import Express from "../../assets/img/express.png";

import Redux from "../../assets/img/redux.png";

import Tailwind from "../../assets/img/tailwind.png";

const Skills = () => {
  const technologies = [
    [HtmlSvg, CssSvg, JsSvg, ReactSvg, NodeSvg],
    [DatabaseSvg, Express],
    [Redux, Tailwind],
  ];

  return (
    <section id="skills">
      <article>
        <h2>Las tecnologias que manejo</h2>

        {technologies.map((level, index) => (
          <div key={index}>
            {level.map((tech, techIndex) => (
              <div key={techIndex}>
                <img src={tech} alt={`Tech ${techIndex}`} className="iconos" />
              </div>
            ))}
          </div>
        ))}
      </article>
      <a href="/">⬆️</a>
    </section>
  );
};

export default Skills;
