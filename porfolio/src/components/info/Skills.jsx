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
    <div id="skills" className="container mx-auto p-8 text-black text-center">
      <h2 className="text-3xl font-bold mb-4">Las tecnologias que manejo</h2>

      {technologies.map((level, index) => (
        <div key={index} className="flex justify-center mt-8">
          {level.map((tech, techIndex) => (
            <div key={techIndex} className="flex flex-col items-center">
              <img
                src={tech}
                alt={`Tech ${techIndex}`}
                className="w-12 h-12 mb-2"
              />
            </div>
          ))}
        </div>
      ))}
      <a href="/">⬆️</a>
    </div>
  );
};

export default Skills;
