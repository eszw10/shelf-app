import Book from "../components/Book";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import SearchBar from "../components/SearcBar";
const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [activeBook, setActiveBook] = useState(null);
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

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/books");
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleFilter = (value) => {
    const filtered =
      value === "All"
        ? books
        : books.filter(
            (book) =>
              book.category &&
              book.category.toLowerCase() === value.toLowerCase()
          );
    setFilters((filters) =>
      filters.map((filter) => ({
        ...filter,
        isActive: filter.value.toLowerCase() === value.toLowerCase(),
      }))
    );
    setFilteredBooks(filtered);
  };
  const handleSearch = (word) => {
    if (!word) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.title && book.title.toLowerCase().includes(word.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  const handleActiveBook = (id) => {
    setActiveBook((prevActiveBook) => (prevActiveBook === id ? null : id));
  };

  const activeBookData = books.find((book) => book.id === activeBook);

  return (
    <div
      className={`bg-slate-100 ${
        activeBook !== null ? "pl-7" : "px-7"
      } flex w-full gap-16`}
    >
      <div className="flex flex-col gap-7 w-full my-10">
        <SearchBar handleSearch={handleSearch} />
        <div className="bg-white shadow-lg flex flex-col gap-5 p-7 rounded-xl h-full">
          <h3 className="font-bold text-2xl">Categories</h3>
          {loading ? (
            <div className="flex justify-center items-center w-[30%]">
              <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-main"></div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4">
                {filters.map((filter) => (
                  <Filter
                    key={filter.id}
                    data={filter}
                    handleClick={handleFilter}
                  />
                ))}
              </div>
              {filteredBooks.length > 0 ? (
                <div
                  className={`grid mt-3 ${
                    activeBook !== null ? "grid-cols-4" : "grid-cols-5"
                  } gap-7`}
                >
                  {filteredBooks.map((book) => (
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
            </>
          )}
        </div>
      </div>
      {activeBook !== null && (
        <Detail data={activeBookData} isLoading={loading} />
      )}
    </div>
  );
};

export default Library;
