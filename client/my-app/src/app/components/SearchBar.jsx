import React from "react";
import styles from "./css/SearchBar.module.css"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
