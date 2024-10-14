import imgNF from "../../assets/image_Not_Found.png";

export const BookCard = ({ title }) => {
  return (
    <a
      href="#"
      className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {title.volumeInfo.imageLinks?.thumbnail ? (
        <img
          className="object-cover h-48 rounded-t-lg"
          src={title.volumeInfo.imageLinks.thumbnail}
          alt={title.volumeInfo.title}
        />
      ) : (
        <img
          className="object-cover h-48 rounded-t-lg"
          src={imgNF}
          alt={title.volumeInfo.title}
        />
      )}

      <div className="flex flex-col  p-4  h-[200px]">
        <div>
          <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">
            {title.volumeInfo.title}
          </h5>
          <h6 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">
            Autor: {title.volumeInfo.authors || "Desconocido"}{" "}
            {/* Asegúrate de manejar el caso donde no hay autores */}
          </h6>
        </div>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis">
          {title.volumeInfo.description}
        </p>
      </div>
    </a>
  );
};
