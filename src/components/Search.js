import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button className="search-btn" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
