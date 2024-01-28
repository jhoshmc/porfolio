import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { useState } from "react";
const NavBar = () => {
  const [name, setName] = useState("menu");
  const menuClick = (e) => {
    const navLinks = document.querySelector(".nav-links");
    if (name === "menu") {
      setName("close");
    } else {
      setName("menu");
    }
    navLinks.classList.toggle("top-[9%]");
    console.log(name);
  };
  const closeMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("top-[9%]");
  };
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <h2>Josias Moran</h2>
      </div>
      <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a
              onClick={closeMenu}
              className="hover:text-blue-500"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="hover:text-blue-500"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="hover:text-blue-500"
              href="#proyects"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="hover:text-blue-500"
              href="#contacto"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button>
          <a href="https://github.com/jhoshmc" target="_blank">
            <img className="size-6" src={github} alt="github" />
          </a>
        </button>

        <button>
          <a href="www.linkedin.com/in/josias-moran-37b320275" target="_blank">
            <img className="size-6" src={linkedin} alt="linkedin" />
          </a>
        </button>
        {name === "menu" ? (
          <button onClick={menuClick} className="cursor-pointer md:hidden">
            <img className="size-6" src={menu} alt="menu" />
          </button>
        ) : (
          <button onClick={menuClick} className="cursor-pointer md:hidden">
            <img className="size-6" src={close} alt="close" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
