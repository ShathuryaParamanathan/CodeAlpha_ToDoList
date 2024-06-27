import { TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchItem = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    if (props.onSearchChange) {
      props.onSearchChange(event.target.value);
    }
  };

  return (
    <div>
        <TextField 
          type='search' 
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
          variant="outlined"
          fullWidth
        />
    </div>
  );
};

export default SearchItem;
