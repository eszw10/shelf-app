import PropTypes from "prop-types";
import { useState } from "react";

const Detail = ({ data }) => {
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div className="w-1/2 bg-main flex flex-col justify-center items-center gap-7">
      {isChanged ? (
        <div className="">
          <input type="text" name="title" value={data.title} />
          <input type="text" name="author" value={data.author} />
          <input type="number" name="progress" value={data.progress} />
          <select name="category" id="">
            <option value="Fic"></option>
          </select>
          <button>Delete</button>
          <button>Update</button>
          <button onClick={() => setIsChanged(false)}>Cancel</button>
        </div>
      ) : (
        <div className="">
          <h1>Detail</h1>
          <img src={data.image} alt="" />
          <p>{data.title}</p>
          <p>{data.author}</p>
          <p>{data.progress}%</p>
          <button onClick={() => setIsChanged(true)}>Change</button>
        </div>
      )}
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
};
