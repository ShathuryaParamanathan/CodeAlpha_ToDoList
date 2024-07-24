import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, MenuItem, Select, FormControl, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ title, onSearchChange, onFilterChange,filter,setFilter,searchValue,setSearchValue }) => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleAddStatus = () => {
    navigate('/add');
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setFilter(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  // const handleSortChange = (event) => {
  //   const value = event.target.value;
  //   setSort(value);
  //   if (onSortChange) {
  //     onSortChange(value);
  //   }
  // };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <TextField
            type='search'
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#fff", marginRight: 2 }}
          />
          <Button sx={{ color: "#fff" }} onClick={handleAddStatus}>Add Task</Button>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={filter}
              onChange={handleFilterChange}
              displayEmpty
              sx={{color: "#fff"}}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="InProgress">In Progress</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={sort}
              onChange={handleSortChange}
              displayEmpty
              sx={{color: "#fff"}}
            >
              <MenuItem value="">
                <em>Sort By</em>
              </MenuItem>
              <MenuItem value="due-date">Due Date</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="alphabetical">Alphabetical</MenuItem>
            </Select>
          </FormControl> */}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
