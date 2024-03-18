const Card = ({ proyecto }) => {
  return (
    <article>
      <img src={proyecto.image} alt={proyecto.name} />
      <div>
        <h2>{proyecto.name}</h2>
        <p>{proyecto.description}</p>
        <div>
          <button>
            <a href={proyecto.codigo} target="_blank">
              codigo
            </a>
          </button>
          {proyecto.web.length > 1 ? (
            <button>
              <a href={proyecto.web} target="_blank">
                web
              </a>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
