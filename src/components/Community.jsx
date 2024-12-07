import books from "../images/pilesOfBook.png";

const Community = () => {
  return (
    <div className="bg-[#87c3e5] p-6 flex flex-col rounded-xl w-[25%]">
      <div className="flex gap-2">
        <p className="text-white text-xl">
          Join a Community of over <strong>5000</strong> Book Lovers
        </p>
        <a
          className="bg-white p-4 rounded-lg text-[#87c3e5]"
          href="https://www.goodreads.com/"
          target="_blank"
        >
          GO
        </a>
      </div>
      <img src={books} alt="" className="mx-auto mt-auto" />
    </div>
  );
};

export default Community;
