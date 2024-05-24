import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(() => e.target.value);
  }

  const handleChangeLocation = (e) => {
    setLocation(() => e.target.value);
  }

  const handleSelectSortOption = (option) => {
    setSortOption(() => option);
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={()=>{handleSelectSortOption(sortByOptionValue)}}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" value={searchTerm} onChange={handleChangeSearchTerm} />
        <input placeholder="Where?" value={location} onChange={handleChangeLocation} />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
