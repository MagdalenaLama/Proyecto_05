import image from "../assets/image.jpg";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header title={"Bienvenidos al buscador de libros"} />
      <section
        className="container h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-center items-center h-full">
          <Link to="/search">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ir a buscar
              </span>
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
