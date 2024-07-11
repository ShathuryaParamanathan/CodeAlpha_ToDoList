import React from "react";
import Items from "./ItemLists";
import { Grid } from "@mui/material";

const Contents = () => {
  return (
    <Grid md={10} sx={{padding:"20px"}} >
      <Items />
    </Grid>
  );
};

export default Contents;
