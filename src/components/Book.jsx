import PropTypes from "prop-types";
import { imageConverter } from "../utils";

const Book = ({ data, handleClick }) => {
  const imageSrc = imageConverter(data.image);
  console.log(imageSrc);

  return (
    <div
      className="font-playfair flex flex-col gap-3 cursor-pointer"
      onClick={() => handleClick(data.id)}
    >
      <img src={imageSrc} className="h-52 w-40" alt={data.title} />
      <p className="w-40">{data.title}</p>
      <p className="text-xs text-gray-400">{data.author}</p>
      <div className="mt-auto w-40 h-1 bg-slate-400 rounded-sm">
        {data.progress > 0 && (
          <div
            style={{ width: `${data.progress}%` }}
            className={`h-1 bg-main rounded-sm`}
          ></div>
        )}
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Book;
