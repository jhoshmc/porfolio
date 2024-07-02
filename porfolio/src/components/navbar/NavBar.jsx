import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import { useState } from "react";
import style from "./navbar.module.css";
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
    setName("menu");
  };
  return (
    <nav>
      <div>
        <ul className={style.container_linst}>
          <a onClick={closeMenu} href="#about">
            About
          </a>

          <a onClick={closeMenu} href="#skills">
            Skills
          </a>

          <a onClick={closeMenu} href="#proyects">
            Proyectos
          </a>

          <a onClick={closeMenu} href="#contacto">
            Contacto
          </a>
        </ul>
      </div>
      <div className={style.container_buttons}>
        <button>
          <a href="https://github.com/jhoshmc" target="_blank">
            <img src={github} alt="github" className="iconos" />
          </a>
        </button>

        <button>
          <a
            href="https://www.linkedin.com/in/josias-moran-37b320275"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="iconos" />
          </a>
        </button>
        {name === "menu" ? (
          <button onClick={menuClick}>
            <img src={menu} alt="menu" className="iconos" />
          </button>
        ) : (
          <button onClick={menuClick}>
            <img src={close} alt="close" className="iconos" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
