import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

const Item = ({ item }) => {
  return (
    <Grid container spacing={2} sx={{backgroundColor:"#f1f1f1"}}>
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
        <Typography variant='body1'>{item.dueDate}</Typography>
      </Grid>
    </Grid>
  );
}

export default Item;
