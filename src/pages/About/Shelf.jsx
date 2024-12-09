import Logo from "../../images/logo fix.png";

const Shelf = () => {
  return (
    <div className="flex gap-10 max-w-[85%] desktop:max-w-[70%]">
      <img src={Logo} alt="shelf-logo" className="h-72 rounded-xl shadow-md" />
      <div className="flex flex-col gap-5 text-lg">
        <h1 className="text-6xl font-bold">
          About <span className="text-main">Shelf</span>
        </h1>
        <p className="text-justify text-gray-500">
          <span className="text-main font-bold">Shelf</span> is a web app
          developed as a personal book tracker and habit tracker for reading
          books. This app is designed to help users manage their reading lists,
          track their reading progress, and build a consistent reading habit. It
          is suitable for all types of readers, from casual readers to avid book
          lovers, offering a personalized and flexible experience. Shelf is not
          just a place to store your book list, but also a companion in your
          literacy journey.
        </p>
      </div>
    </div>
  );
};

export default Shelf;
