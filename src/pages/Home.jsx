import QuotesBox from "../components/QuotesBox";
import SearchBar from "../components/SearcBar";
import { books } from "../booklist";
import Book from "../components/Book";
import Statistic from "../components/Statistic";
import { CircleUserRound, Mail } from "lucide-react";
import Reminder from "../components/Reminder";
import Community from "../components/Community";

const Home = () => {
  const uniqueAuthor = [...new Set(books.map((book) => book.author))].length;
  const onGoing = books.filter(
    (book) => book.progress < 100 && book.progress > 0
  ).length;
  const statistics = [
    {
      id: 1,
      title: "Total Books",
      value: books.length,
      color: "red",
    },
    {
      id: 2,
      title: "Author",
      value: uniqueAuthor,
      color: "yellow",
    },
    {
      id: 3,
      title: "Books Read",
      value: onGoing,
      color: "blue",
    },
  ];
  return (
    <div className="px-9 pt-4 pb-10 flex flex-col gap-7 w-full bg-slate-100">
      <div className="flex justify-between">
        <SearchBar />
        <div className="flex items-center gap-3">
          <CircleUserRound className="text-gray-400" size={30} />
          <p>Hafizh S.</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <QuotesBox />
        <Reminder data={books} />
      </div>
      <p className="text-gray-400 text-xl">Continue Reading</p>
      <div className="flex justify-between">
        <div className="flex justify-between w-[60%]">
          {books
            .filter((book) => book.id < 5)
            .map((book) => (
              <Book key={book.id} data={book} />
            ))}
        </div>
        <Community />
      </div>
      <div className="flex justify-between">
        <div className="mt-10 flex items-center justify-evenly w-[60%]">
          {statistics.map((statistic) => (
            <Statistic key={statistic.id} data={statistic} />
          ))}
        </div>
        <div className="flex mt-auto gap-3 bg-main text-white py-4 px-6 rounded-xl cursor-pointer shadow ">
          <p className="font-bold">Contact Us</p>
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default Home;
