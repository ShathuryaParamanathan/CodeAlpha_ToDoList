import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button } from "@mui/material";
import Item from "./Item"; // Import the Item component
import AddTask from "./AddTask"; // Import the AddTask component

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addMode, setAddMode] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks"); // Replace with your actual API endpoint
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleTaskAdded = (newTask) => {
    setItems((prevItems) => [...prevItems, newTask]);
    setAddMode(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching items: {error.message}</p>;
  }

  return (
    <div>
      <Grid container spacing={3} sx={{padding:"2vw 5vh",display:"flex"}}> 
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={() => {
          setAddMode(true);
        }}
      >
        Add
      </Button>
      <Grid xs={12} md={6} lg={9}>
      {addMode && <AddTask onTaskAdded={handleTaskAdded} />}
      </Grid>
      
    </div>
  );
};

export default ItemList;
