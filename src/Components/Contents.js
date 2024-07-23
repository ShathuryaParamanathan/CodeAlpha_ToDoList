import React from "react";
import Items from "./ItemLists";
import { Grid } from "@mui/material";

const Contents = ({filter,sort,searchValue}) => {
  return (
    <Grid md={10} sx={{padding:"20px"}} >
      <Items filter={filter} />
    </Grid>
  );
};

export default Contents;
