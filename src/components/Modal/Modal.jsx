import imgNF from "../../assets/image_Not_Found.png";
export const Modal = ({ closeModal, title, handleOutsideClick }) => {
  return (
    <>
      <div
        id="modalBackdrop"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="max-h-96">
              <img
                className="object-cover h-full w-full mb-4"
                src={
                  title.volumeInfo.imageLinks?.thumbnail
                    ? title.volumeInfo.imageLinks.thumbnail
                    : imgNF
                }
                alt={title.volumeInfo.title}
              />
            </div>
            <div>
              <button
                className="text-gray-500 float-right font-bold"
                onClick={closeModal}
              >
                &times;
              </button>

              <h5 className="text-2xl font-bold mb-2">
                {title.volumeInfo.title}
              </h5>
              <h6 className="text-lg font-semibold mb-2">
                Autor: {title.volumeInfo.authors || "Desconocido"}
              </h6>
              {/* Contenedor de texto desplazable */}
              <p className="text-gray-700 max-h-48 overflow-y-auto">
                {title.volumeInfo.description || "Descripción no disponible"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
