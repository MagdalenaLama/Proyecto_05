import imgNF from "../../assets/image_Not_Found.png";
export const Modal = ({ closeModal, title, handleOutsideClick }) => {
  return (
    <>
      <div
        id="modalBackdrop"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
          <button
            className="text-gray-500 float-right font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            className="object-cover h-48 w-full mb-4"
            src={
              title.volumeInfo.imageLinks?.thumbnail
                ? title.volumeInfo.imageLinks.thumbnail
                : imgNF
            }
            alt={title.volumeInfo.title}
          />
          <h5 className="text-2xl font-bold mb-2">{title.volumeInfo.title}</h5>
          <h6 className="text-lg font-semibold mb-2">
            Autor: {title.volumeInfo.authors || "Desconocido"}
          </h6>
          <p className="text-gray-700">
            {title.volumeInfo.description || "Descripción no disponible"}
          </p>
        </div>
      </div>
    </>
  );
};
