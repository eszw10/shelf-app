export const imageConverter = (image) => {
  if (image) {
    if (typeof image === "string" && image.startsWith("data:image")) {
      // If the image is a Base64 string
      return image;
    } else {
      // If the image is a Blob (binary data), create a URL
      return URL.createObjectURL(new Blob([new Uint8Array(image)]));
    }
  } else {
    // Default image if no image data exists
    return "/default-image.jpg";
  }
};
