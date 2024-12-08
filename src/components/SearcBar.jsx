import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="bg-white items-center search flex p-3 rounded-xl gap-3 shadow-sm">
      <input
        type="text"
        className="w-full outline-none"
        placeholder="search.."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search className="text-gray-400" />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};
