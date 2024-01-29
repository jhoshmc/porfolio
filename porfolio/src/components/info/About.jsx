// import logo from "../../assets/mainIconsdark.svg";
import logo from "../../assets/logo.png";
import CvPdf from "../../assets/cv.pdf";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CvPdf;
    link.download = "Cv Joaquin";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="container mx-auto p-20 flex flex-col lg:flex-row items-center justify-between mt-30"
    >
      <div className="lg:w-1/2 lg:pr-10 mt-8">
        <div>
          <span className="text-4xl font-bold text-gray-800">
            <font className="text-black bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-600 ml-0">
              sobre mí
            </font>
          </span>
        </div>
        <p className="text-lg text-black mt-4">
          Soy un desarrollador Full Stack con entuciasmo de seguir
          desarrollandome pero en un ambiente laboral
        </p>

        {/* <div className="flex flex-col items-center space-y-5 space-x-4 p-4  lg:mt-0">
          <button
            onClick={handleDownloadCV}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg border cursor-pointer font-bold"
          >
            Descargar CV
          </button>
        </div> */}
      </div>

      <div className="lg:w-1/2 lg:pr-25 mt-5">
        <img
          src={logo}
          alt="Mi SVG"
          className="w-full h-auto rounded text-white "
        />
      </div>
      <a href="/">up</a>
    </div>
  );
};

export default About;
