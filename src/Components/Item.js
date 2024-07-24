import React, { useState } from 'react';
import { Typography, Grid, Select, MenuItem, FormControl, InputLabel, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const Item = ({ item }) => {
  const [status, setStatus] = useState(item.status || 'Pending');
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(item.title);
  const [tempDescription, setTempDescription] = useState(item.description);
  const [tempCategory, setTempCategory] = useState(item.category);
  const [tempDueDate, setTempDueDate] = useState(new Date(item.dueDate).toISOString().slice(0, 16));

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTempTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTempDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setTempCategory(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setTempDueDate(event.target.value);
  };

  const toggleEditMode = () => {
    if (isEditing) {
      setTempTitle(item.title);
      setTempDescription(item.description);
      setTempCategory(item.category);
      setTempDueDate(new Date(item.dueDate).toISOString().slice(0, 16));
      setStatus(item.status);
    }
    setIsEditing((prev) => !prev);
  };
  const handleDelete =async()=>{
    await axios.delete(`http://localhost:5000/api/tasks/delete/${item._id}`)
  }
  const saveChanges = async () => {
    const updatedItem = {
      title: tempTitle,
      description: tempDescription,
      category: tempCategory,
      dueDate: new Date(tempDueDate).toISOString(),
      status
    };

    await axios.put(`http://localhost:5000/api/tasks/editTask/${item._id}`, updatedItem);
    
    setIsEditing(false);
  };

  const cancelChanges = () => {
    setTempTitle(item.title);
    setTempDescription(item.description);
    setTempCategory(item.category);
    setTempDueDate(new Date(item.dueDate).toISOString().slice(0, 16));
    setStatus(item.status);
    setIsEditing(false);
  };

  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#f1f1f1", padding: "10px 0", width: "300px", borderRadius: "20px" }}>
      <Grid item xs={12}>
        {isEditing ? (
          <TextField
            fullWidth
            label="Title"
            value={tempTitle}
            onChange={handleTitleChange}
          />
        ) : (
          <Typography variant='h6'>{item.title}</Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <TextField
            fullWidth
            label="Description"
            value={tempDescription}
            onChange={handleDescriptionChange}
          />
        ) : (
          <Typography variant='body1'>{item.description}</Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <TextField
            fullWidth
            label="Category"
            value={tempCategory}
            onChange={handleCategoryChange}
          />
        ) : (
          <Typography variant='body1'>{item.category}</Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <TextField
            fullWidth
            label="Due Date"
            type="datetime-local"
            value={tempDueDate}
            onChange={handleDueDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        ) : (
          <Typography variant='body1'>{formatDate(item.dueDate)}</Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={handleStatusChange} label="Status">
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="InProgress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Typography variant='body1'>{status}</Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isEditing ? (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={saveChanges}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={cancelChanges}>
              Cancel
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={toggleEditMode} >
            Edit
          </Button>
           <Button variant="contained" color="primary" onClick={handleDelete}>
           Delete
         </Button>
         </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Item;
