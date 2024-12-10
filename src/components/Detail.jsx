import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Detail = ({ data }) => {
  const navigate = useNavigate();
  const [book, setBook] = useState(data);

  // Update book state whenever the data prop changes (active book changes)
  useEffect(() => {
    setBook(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((book) => ({
      ...book,
      [name]: value,
    }));
  };

  const handleDelete = async (bookId) => {
    try {
      const booksToDelete = [{ id: bookId }]; // Create an array with the book id

      const response = await fetch(`http://localhost:8080/books`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booksToDelete),
      });

      console.log(response);
      if (response.ok) {
        toast.success("Book deleted successfully");
        alert(data);
        navigate("/");
      } else {
        toast.error("Failed to delete books");
        navigate("/books");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //update
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/books`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([book]),
      });

      if (response.ok) {
        toast.success("Book updated successfully");
        navigate("/books");
      } else {
        toast.error("Failed to update book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 bg-main flex flex-col justify-center items-center gap-7">
      <h1 className="font-semibold text-3xl text-white">Manage Book</h1>
      <div className="flex flex-col items-center gap-7">
        <img src={book.image} alt={book.title} className="rounded-xl" />
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Change Image</p>
          <input
            type="text"
            name="image"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Title</p>
          <input
            type="text"
            name="title"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            value={book.title || ""}
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
            value={book.author || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Progress : </p>
          <input
            type="number"
            name="progress"
            className="outline-main p-2 border border-gray-300 rounded-xl"
            value={book.progress || ""}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Category : </p>
          <select
            name="category"
            className="border border-gray-300 rounded-xl outline-main p-2"
            value={book.category || ""}
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
          <button
            onClick={() => handleDelete(book.id)}
            className="bg-red-600 font-semibold text-white py-2 px-6 rounded-lg"
          >
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="bg-green-600 font-semibold text-white py-2 px-6 rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
};
