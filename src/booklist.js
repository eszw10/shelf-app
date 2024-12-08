import Book1 from "./images/book1.png";
import Book2 from "./images/book2.png";
import Book3 from "./images/book3.png";
import Book4 from "./images/book4.png";
import Book5 from "./images/book5.png";

const books = [
  {
    id: 1,
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twine",
    progress: 80,
    isRead: true,
    image: Book1,
    category: "Fiction",
  },
  {
    id: 2,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    progress: 90,
    isRead: true,
    image: Book2,
    category: "Fiction",
  },
  {
    id: 3,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    progress: 40,
    isRead: true,
    image: Book3,
    category: "Fiction",
  },
  {
    id: 4,
    title: "The Time Machine",
    author: "H. G. Wells",
    progress: 80,
    isRead: true,
    image: Book4,
    category: "History",
  },
  {
    id: 5,
    title: "The Lost World",
    author: "H. G. Wells",
    progress: 0,
    isRead: false,
    image: Book5,
    category: "Non-Fiction",
  },
];

export default books;
