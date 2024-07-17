import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearch(searchText);
  };

  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <>
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

      {/* <div>
        <label>UserName: </label>
        <input
          type="text"
          value={loggedInUser}
          className="border border-gray-500"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </div> */}
    </>
  );
};

export default Search;
