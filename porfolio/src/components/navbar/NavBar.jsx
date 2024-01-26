const NavBar = () => {
  return (
    <div className="flex justify-around py-8 bg-red-400  ">
      <div>
        <button>
          <a href="*about">About</a>
        </button>
      </div>
      <div>
        <button>
          <a href="#skills">Skills</a>
        </button>
      </div>
      <div>
        <button>
          <a href="#proyects">Proyectos</a>
        </button>
      </div>
      <div>
        <button>
          <a href="#contacto">Contacto</a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
