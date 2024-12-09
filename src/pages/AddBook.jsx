import { useState } from "react";
import books from "../booklist";

const AddBook = () => {
  const [book, setBook] = useState({
    id: books.length + 1,
    title: "",
    author: "",
    progress: 0,
    isRead: false,
    image: null,
    category: "",
  });
  const [image, setImage] = useState(null);
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
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Image :</p>
            <input
              type="file"
              accept="image/*"
              name=""
              id=""
              onChange={handleImageChange}
              value={image}
            />
          </div>
          {preview && (
            <div className="flex gap-2">
              <div className="">Image Preview :</div>
              <img src={preview} alt="image-preview" className="h-14" />
            </div>
          )}
        </form>
        <button className="bg-main text-white p-2 rounded-xl">Submit</button>
      </div>
    </div>
  );
};

export default AddBook;
// upload image and using hot toast
// import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   // Handle the image file change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const previewURL = URL.createObjectURL(file);
//       setPreview(previewURL);
//     }
//   };

//   // Handle image upload
//   const handleUpload = async () => {
//     if (!image) {
//       toast.error('Please select an image first!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const response = await fetch('http://your-backend-api.com/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         toast.success(`Upload successful: ${data.message}`);
//       } else {
//         toast.error('Upload failed. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Error occurred during upload.');
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageChange} />

//       {preview && (
//         <div>
//           <h3>Image Preview:</h3>
//           <img src={preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />
//         </div>
//       )}

//       {image && (
//         <button onClick={handleUpload}>Upload Image</button>
//       )}

//       {/* Toaster: Add this to your component tree */}
//       <Toaster />
//     </div>
//   );
// };

// export default ImageUpload;
