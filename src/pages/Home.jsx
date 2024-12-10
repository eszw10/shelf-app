import QuotesBox from "../components/QuotesBox";
// import books from "../booklist";
import Book from "../components/Book";
import Statistic from "../components/Statistic";
import { CircleUserRound, Mail } from "lucide-react";
import Reminder from "../components/Reminder";
import Community from "../components/Community";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const uniqueAuthor = [...new Set(books?.map((book) => book.author))].length;
  const onGoing = books?.filter(
    (book) => book.progress < 100 && book.progress > 0
  ).length;
  const statistics = [
    {
      id: 1,
      title: "Total Books",
      value: books.length,
    },
    {
      id: 2,
      title: "Author",
      value: uniqueAuthor,
    },
    {
      id: 3,
      title: "Books Read",
      value: onGoing,
    },
  ];

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);

  return (
    <div className="pb-10 flex flex-col gap-7 w-full bg-slate-100">
      <div className="flex justify-between bg-white px-9 py-4">
        <h1 className="text-3xl font-bold text-main">Shelf.</h1>
        <div className="flex items-center gap-3">
          <CircleUserRound className="text-gray-400" size={30} />
          <p>Hafizh S.</p>
        </div>
      </div>
      <div className="flex mx-9 justify-between items-center">
        <QuotesBox />
        {loading ? (
          <div className="flex justify-center items-center w-[30%]">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-main"></div>
          </div>
        ) : books && books.length === 0 ? (
          <div>You have no book.</div>
        ) : books && books.length > 0 ? (
          <Reminder data={books} />
        ) : null}
      </div>
      <p className="text-gray-400 text-xl mx-9">Continue Reading</p>
      <div className="flex justify-between mx-9">
        <div className="flex justify-between w-[60%]">
          {loading ? (
            <div className="w-full flex justify-center items-center">
              <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-main"></div>
            </div>
          ) : books.length === 0 ? (
            <div>You have no book.</div>
          ) : (
            books.slice(0, 4).map((book) => <Book key={book.id} data={book} />) // Use .slice() to get the first 5 books
          )}
        </div>
        <Community />
      </div>
      <div className="flex justify-between mx-9">
        <div className="mt-10 flex items-center justify-evenly w-[60%]">
          {statistics.map((statistic) => (
            <Statistic key={statistic.id} data={statistic} />
          ))}
        </div>
        <Link
          className="flex mt-auto gap-3 bg-main text-white py-4 px-6 rounded-xl cursor-pointer shadow "
          to={"/about"}
        >
          <p className="font-bold">Contact Us</p>
          <Mail />
        </Link>
      </div>
    </div>
  );
};

export default Home;
