import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
    category: "",
    progress: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((book) => ({
      ...book,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([book]),
    });

    if (response.ok) {
      toast.success("Book added successfully");
      navigate("/books");
    } else {
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="bg-slate-100 flex justify-center items-center w-full">
      <div className="bg-white w-[50%] flex flex-col gap-10 rounded-xl shadow-main shadow-md p-7">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center">
            Add Your <span className="text-main">Book</span>
          </h1>
          <p>Fill in this form below with the book you want to track.</p>
        </section>
        <form action="" className="flex flex-col gap-5">
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
              min="0"
              max="100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Category : </p>
            <select
              name="category"
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
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Image URL :</p>
            <input
              type="text"
              placeholder="Image URL..."
              onChange={handleChange}
              className="outline-main p-2 border border-gray-300 rounded-xl"
              value={book.image}
              name="image"
            />
          </div>
          {book.image !== "" && (
            <div className="flex gap-2">
              <div className="font-semibold">Image Preview :</div>
              <img src={book.image} alt="image-preview" className="h-14" />
            </div>
          )}
        </form>
        <button
          className="bg-main text-white p-2 rounded-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default AddBook;
