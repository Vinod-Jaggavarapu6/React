import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="m-4 p-4">
      <input
        type="text"
        className="w-96 border border-gray border-solid p-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        className="ml-4 p-2 px-4 bg-green-500 rounded-lg"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
