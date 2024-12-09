import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { imageConverter } from "../utils";

const Reminder = ({ data }) => {
  const book = data.filter((book) => book.progress < 70 && book.progress >= 0);
  const chosenBook = book[Math.floor(Math.random() * book.length)];
  const imageSrc = imageConverter(chosenBook.image);
  console.log(imageSrc);

  const notify = () =>
    toast.success("Sure Boss, Don't forget to read it later!");
  return (
    <div className="flex bg-ground-light gap-5 p-6 rounded-xl w-[30%] 2xl:w-[25%]">
      <img src={imageSrc} alt={chosenBook.title} />
      <div className="flex flex-col">
        <p className="mb-5">
          Did you read <strong>{chosenBook.title}</strong> by{" "}
          {chosenBook.author}?
        </p>
        <Link
          className="bg-white py-1 px-2 rounded-lg text-sm text-center"
          to={`/books`}
        >
          Read Today
        </Link>
        <div className="mt-2 bg-black text-white py-1 px- rounded-lg text-sm text-center">
          <button onClick={notify}>Read later</button>
          <Toaster position="bottom-left" />
        </div>
      </div>
    </div>
  );
};

export default Reminder;

Reminder.propTypes = {
  data: PropTypes.array,
};
