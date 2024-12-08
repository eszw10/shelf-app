import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import AddBook from "./pages/AddBook";
import Library from "./pages/Library";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Library />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
