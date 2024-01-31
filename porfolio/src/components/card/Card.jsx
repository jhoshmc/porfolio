const Card = ({ proyecto }) => {
  return (
    <div className="max-w-md mx-auto border border-[#2A0E61]  shadow-lg rounded-lg overflow-hidden mb-8">
      <img
        className="w-full h-30 object-cover object-center"
        src={proyecto.image}
        alt={proyecto.name}
      />
      <div className="p-4 hover:bg-fuchsia-300 hover:text-white transition duration-300 ease-in">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          {proyecto.name}
        </h2>
        <p className="mt-2 text-black mb-[20px]">{proyecto.description}</p>
        <div className="flex flex-col items-center space-y-5">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            <a href={proyecto.codigo} target="_blank">
              codigo
            </a>
          </button>
          {proyecto.web.length > 1 ? (
            <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              <a href={proyecto.web} target="_blank">
                web
              </a>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
