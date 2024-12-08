const AddBook = () => {
  return (
    <div className="bg-slate-100 flex justify-center items-center w-full">
      <div className="bg-white h-[70%] w-[70%] rounded-xl shadow-lg p-7">
        <h1 className="text-3xl font-bold text-center pt-10">
          Add Your <span className="text-main">Book</span>
        </h1>
        <div className="">
          <p>Title : </p>
          <input type="text" name="title" />
        </div>
        <div className="">
          <p>Author : </p>
          <input type="text" name="author" />
        </div>
        <div className="">
          <p>Progress : </p>
          <input type="number" name="progress" />
        </div>
        <div className="">
          <p>Category : </p>
          <select name="category" id="">
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Education">Education</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
            <option value="History">History</option>
          </select>
        </div>
        <div className="">
          <p>Image :</p>
          <input type="file" accept="image/*" name="" id="" />
        </div>
        <div className="">Image Preview :</div>
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
