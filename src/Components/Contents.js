import React from "react";
import Search from "./SearchItem";
import Items from "./ItemLists";
import { Grid } from "@mui/material";

const Contents = () => {
  return (
    <Grid md={10} >
      <Items />
    </Grid>
  );
};

export default Contents;
