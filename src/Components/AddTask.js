import React, { useState } from 'react';
import { Grid, Button, TextField, Box, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import AddTaskImage from '../Assets/addTask.png';
import { useNavigate } from 'react-router-dom';
import NavBar2 from './NavBar2';

const AddTask = () => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    category: '',
    dueDate: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();

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
      setNewTask({
        title: '',
        description: '',
        category: '',
        dueDate: '',
      });

      setSnackbarMessage('Task successfully created');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 3000); // Navigate after 3 seconds
    } catch (error) {
      setSnackbarMessage('Error creating task: ' + error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCancel = () => {
    setNewTask({
      title: '',
      description: '',
      category: '',
      dueDate: '',
    });
    navigate('/');
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px', padding: '40px' }}>
      <Grid item xs={12} md={6}>
        <NavBar2 heading="Task Manager" />
        <Box
          sx={{
            p: 4,
            boxShadow: 2,
            borderRadius: 2,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Create New Task
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="title"
                label="Title"
                variant="outlined"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="description"
                label="Description"
                variant="outlined"
                value={newTask.description}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="category"
                label="Category"
                variant="outlined"
                value={newTask.category}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="dueDate"
                label="Due Date"
                type="date"
                variant="outlined"
                value={newTask.dueDate}
                onChange={handleInputChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" onClick={handleCreateTask}>
                Create Task
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={AddTaskImage}
          alt="Task Illustration"
          style={{ width: '100%', height: '75vh', borderRadius: '8px' }}
        />
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default AddTask;
