import { BookCard } from "../BookCard/BookCard";

export const BooksGrid = ({ data }) => {
  return (
    <>
      <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data
          .filter((book) => book.volumeInfo.description) // Filtrar libros que tienen descripción
          .map((book) => (
            <BookCard key={book.id} title={book} />
          ))}
      </div>
      ;
    </>
  );
};
