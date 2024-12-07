import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white items-center search flex p-3 w-[65%] rounded-xl gap-3 shadow-sm">
      <input
        type="text"
        className="w-full outline-none"
        placeholder="search.."
      />
      <Search className="text-gray-400" />
    </div>
  );
};

export default SearchBar;
