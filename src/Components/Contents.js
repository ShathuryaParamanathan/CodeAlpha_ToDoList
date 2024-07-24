import React from 'react';
import Items from './ItemLists';
import { Grid } from '@mui/material';

const Contents = ({ filter, searchValue }) => {
  return (
    <Grid container justifyContent="center" sx={{ padding: "20px" }}>
      <Grid item md={10}>
        <Items filter={filter} searchValue={searchValue} />
      </Grid>
    </Grid>
  );
};

export default Contents;
