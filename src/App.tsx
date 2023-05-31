import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, AppBar, Grid } from "@mui/material";

function App() {
  return (
    <Box>
      <Container />
      <AppBar> </AppBar>
      <Grid container>
        <Grid item xs={12}>
          <div>Form here</div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <div>List here</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
