import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    category: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleCreateTask = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', newTask); 
      const createdTask = response.data;
      onTaskAdded(createdTask); 
      setNewTask({
        title: '',
        description: '',
        category: '',
        dueDate: '',
      });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <Grid container spacing={2} md ={6} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={newTask.title}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          value={newTask.description}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="category"
          label="Category"
          variant="outlined"
          value={newTask.category}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="dueDate"
          label="Due Date"
          type="date"
          variant="outlined"
          value={newTask.dueDate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCreateTask}>
          Create Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTask;
