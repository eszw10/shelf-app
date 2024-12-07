import PropTypes from "prop-types";
const Reminder = ({ data }) => {
  const book = data.filter((book) => book.progress < 70 && book.progress > 0);
  const chosenBook = book[Math.floor(Math.random() * book.length)];
  return (
    <div className="flex bg-ground-light gap-5 p-6 rounded-xl w-[25%]">
      <img src={chosenBook.image} alt={chosenBook.title} />
      <div className="flex flex-col">
        <p className="mb-5">
          Did you read <strong>{chosenBook.title}</strong> by{" "}
          {chosenBook.author}?
        </p>
        <button className="bg-white py-1 px-2 rounded-lg text-sm">
          Read Today
        </button>
        <button className="mt-2 bg-black text-white py-1 px-2 rounded-lg text-sm">
          Read later
        </button>
      </div>
    </div>
  );
};

export default Reminder;

Reminder.propTypes = {
  data: PropTypes.array,
};
