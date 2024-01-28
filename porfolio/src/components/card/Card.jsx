const Card = ({ proyecto }) => {
  return (
    <div>
      {/* <p>imagen del procecto</p>
      <h3>'nombre del proyecto'</h3>
      <p>descripcion del proyecto</p>
      <p>link del codigo</p>
      <p>link del deploy</p> */}
      <p>imagen del procecto</p>
      <h3>{proyecto.name}</h3>
      <p>{proyecto.description}</p>
      <a href={proyecto.codigo} target="_blank">
        codigo
      </a>
      <br />
      <a href={proyecto.web} target="_blank">
        web
      </a>
    </div>
  );
};

export default Card;
