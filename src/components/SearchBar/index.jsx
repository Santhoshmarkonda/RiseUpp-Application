import { useState } from "react";
import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching:", query);
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        className="input-tab"
        type="text"
        placeholder="Search for images..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="button" className="search" onClick={handleSearch}>
        <img
          className="search-logo"
          src="https://img.icons8.com/?size=100&id=111487&format=png&color=ffffff"
          alt="search-icon"
        />
      </button>
    </div>
  );
};

export default SearchBar;