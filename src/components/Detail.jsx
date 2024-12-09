import PropTypes from "prop-types";
import { useState } from "react";
import { imageConverter } from "../utils";

const Detail = ({ data }) => {
  const imageSrc = imageConverter(data.image);
  const [image, setImage] = useState(null);
  const [book, setBook] = useState(data);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const file = e.target.files[0];
    if (name == "image") {
      if (file) {
        setImage(file);
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
      }
    }
    setBook((book) => ({
      ...book,
      [name]: name == "image" ? image : value,
    }));
  };

  const formData = new FormData();
  formData.append("image", image);

  return (
    <div className="w-1/2 bg-main flex flex-col justify-center items-center gap-7">
      <h1 className="font-semibold text-3xl text-white">Manage Book</h1>
      <div className="flex flex-col items-center gap-7">
        <img src={imageSrc} alt={book.title} className="rounded-xl" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Title</p>
          <input
            type="text"
            name="title"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Author : </p>
          <input
            type="text"
            name="author"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            required
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Progress : </p>
          <input
            type="number"
            name="progress"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            value={book.progress}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Category : </p>
          <select
            name="category"
            id=""
            className="border border-gray-300 rounded-xl outline-main p-2"
            value={book.category}
            onChange={handleChange}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Education">Education</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
            <option value="History">History</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-red-600 font-semibold text-white py-2 px-6 rounded-lg">
            Delete
          </button>
          <button className="bg-green-600 font-semibold text-white py-2 px-6 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
};
