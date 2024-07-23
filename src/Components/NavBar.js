import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, MenuItem, Select, FormControl, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';

const NavBar = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    if (props.onSearchChange) {
      props.onSearchChange(event.target.value);
    }
  };

  const handleAddStatus = () => {
    navigate('/add');
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    if (props.onFilterChange) {
      props.onFilterChange(event.target.value);
    }
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    if (props.onSortChange) {
      props.onSortChange(event.target.value);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <TextField
            type='search'
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "white", marginRight: 2 }}
          />
          <Button sx={{ color: "#fff" }} onClick={handleAddStatus}>Add Task</Button>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={filter}
              onChange={handleFilterChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Inrogress">In Progress</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginRight: 2 }}>
            <Select
              value={sort}
              onChange={handleSortChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>Sort By</em>
              </MenuItem>
              <MenuItem value="due-date">Due Date</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="alphabetical">Alphabetical</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
          >
          </IconButton>
        </Toolbar>
      </AppBar>
      <Contents filter={filter} sort={sort} searchValue={searchValue} />
    </>
  );
};

export default NavBar;
