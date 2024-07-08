import React from 'react';
import { Typography, Grid } from '@mui/material';

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
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#f1f1f1" }}>
      <Grid item xs={12}>
        <Typography variant='h4'>{item.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>{item.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>{item.category}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>{formatDate(item.dueDate)}</Typography>
      </Grid>
    </Grid>
  );
}

export default Item;
