import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Item from "./Item"; 

const ItemList = ({ filter, searchValue }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let url = `http://localhost:5000/api/tasks/`;
        if (filter) {
          url += `${filter}`;
        }
        if (searchValue) {
          url += `${encodeURIComponent(searchValue)}`;
        }
        const response = await axios.get(url);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [filter, searchValue]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching items: {error.message}</p>;
  }

  return (
    <Grid container spacing={3} sx={{ padding: "2vw 5vh", display: "flex" }} gap={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} > 
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
