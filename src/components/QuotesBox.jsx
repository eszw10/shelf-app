import quotesData from "../qoutesdata";
const QuotesBox = () => {
  const quotes = quotesData[Math.floor(Math.random() * quotesData.length)];
  return (
    <div className="flex flex-col gap-3 font-playfair w-[65%] rounded-xl bg-pattern py-7 px-16 ">
      <div className="w-fit bg-[#77cbef] text-white p-2 rounded-lg text-sm">
        Quotes today
      </div>
      <p className="text-3xl">&quot;{quotes.quote}&quot;</p>
      <p>~ {quotes.author}</p>
    </div>
  );
};

export default QuotesBox;
