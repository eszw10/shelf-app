import Book from "../components/Book";
import booksArr from "../booklist";
import Filter from "../components/Filter";
import { useState } from "react";
import Detail from "../components/Detail";
import SearchBar from "../components/SearcBar";
const Library = () => {
  const [filters, setFilters] = useState([
    {
      id: 1,
      value: "All",
      isActive: true,
    },
    {
      id: 2,
      value: "Fiction",
      isActive: false,
    },
    {
      id: 3,
      value: "Non-Fiction",
      isActive: false,
    },
    {
      id: 4,
      value: "Education",
      isActive: false,
    },
    {
      id: 5,
      value: "Fantasy",
      isActive: false,
    },
    {
      id: 6,
      value: "Drama",
      isActive: false,
    },
    {
      id: 7,
      value: "History",
      isActive: false,
    },
  ]);

  const [books, setBooks] = useState(booksArr);
  const [activeBook, setActiveBook] = useState(null);

  const handleFilter = (value) => {
    const filtered =
      value === "All"
        ? booksArr
        : booksArr.filter((book) => book.category === value);
    setBooks(filtered);
    setFilters((filters) =>
      filters.map((filter) => {
        if (filter.value === value) {
          return { ...filter, isActive: true };
        }
        return { ...filter, isActive: false };
      })
    );
  };

  const handleSearch = (word) => {
    setBooks(booksArr.filter((book) => book.title.includes(word)));
  };

  const handleActiveBook = (id) => {
    if (activeBook === id) {
      setActiveBook(null);
    }
    setActiveBook(id);
  };

  console.log(activeBook);

  return (
    <div
      className={`bg-slate-100 ${
        activeBook !== null ? "pl-7" : "px-7"
      } flex w-full gap-16`}
    >
      <div className="flex flex-col gap-7 w-full mt-10">
        <SearchBar handleSearch={handleSearch} />
        <div className="bg-white shadow-lg flex flex-col gap-5 p-7 rounded-xl">
          <h3 className="font-bold text-2xl">Categories</h3>
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <Filter
                key={filter.id}
                data={filter}
                handleClick={handleFilter}
              />
            ))}
          </div>
          {books.length > 0 ? (
            <div
              className={`grid ${
                activeBook !== null ? "grid-cols-4" : "grid-cols-5"
              } gap-7`}
            >
              {books.map((book) => (
                <Book
                  key={book.id}
                  data={book}
                  handleClick={handleActiveBook}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              you have no book with this category.
            </div>
          )}
        </div>
      </div>
      {activeBook !== null && <Detail data={books[activeBook]} />}
    </div>
  );
};

export default Library;
