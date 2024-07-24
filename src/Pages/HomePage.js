import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Contents from "../Components/Contents";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <NavBar
        title="Task Master"
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        filter={filter}
        setFilter={setFilter}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Contents
        filter={filter}
        searchValue={searchValue}
      />
    </div>
  );
};

export default HomePage;
