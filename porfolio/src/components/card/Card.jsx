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

          <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            <a href={proyecto.web} target="_blank">
              web
            </a>
          </button>
        </div>
      </div>
    </div>
    // <div className="flex flex-wrap -m-4">
    //   <div className="p-4 sm:w-1/2 lg:w-1/3">
    //     <div className="h-full border-2 border-black border-opacity-60 rounder-lg overflow-hidden">
    //       <img
    //         src={proyecto.image}
    //         alt={proyecto.name}
    //         className="lg:h-72 md:h-48 w-full object-cover object-center"
    //       />
    //       <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
    //         <h2 className="text-base font-medium text-indigo-300 mb-1">
    //           {proyecto.name}
    //         </h2>
    //         <p className="leading-relaxed mb-3">{proyecto.description}</p>
    //         <button>
    //           <a href={proyecto.codigo} target="_blank">
    //             codio
    //           </a>
    //         </button>
    //         <br />
    //         <button>
    //           <a href={proyecto.web} target="_blank">
    //             web
    //           </a>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <img className="size-40" src={proyecto.image} alt={proyecto.name} />
    //   <h3>{proyecto.name}</h3>
    //   <p>{proyecto.description}</p>
    //   <a href={proyecto.codigo} target="_blank">
    //     codigo
    //   </a>
    //   <br />
    //   <a href={proyecto.web} target="_blank">
    //     web
    //   </a> */}
    // </div>
  );
};

export default Card;
