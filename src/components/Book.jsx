import PropTypes from "prop-types";

const Book = ({ data }) => {
  return (
    <div className="font-playfair flex flex-col gap-3">
      <img src={data.image} className="h-52 w-40" alt={data.title} />
      <p className="w-40">{data.title}</p>
      <p className="text-xs text-gray-400">{data.author}</p>
      <div className="mt-auto w-full h-1 bg-slate-400 rounded-sm">
        {data.progress > 0 && (
          <div className={`h-1 bg-main w-[${data.progress}%] rounded-sm`}></div>
        )}
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.object,
};

export default Book;
