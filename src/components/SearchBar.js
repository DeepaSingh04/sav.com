import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
