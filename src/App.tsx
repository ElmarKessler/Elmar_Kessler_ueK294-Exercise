import "./App.css";
import { Box, Container, AppBar, Grid } from "@mui/material";
import RandomCatForm from "./RandomCatForm";
import RandomCatList from "./RandomCatList";

function App() {
  return (
    <Box>
      <Container />
      <AppBar> </AppBar>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <RandomCatForm />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <div>
            <RandomCatList />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
