import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { Navbar } from "./Navbar";
import { Item } from "../common/Item";
import StandardImageList from "./StandardImageList";

function Homepage() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item>
          <Navbar />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Button
            component={Link}
            to="/all-products"
            variant="contained"
            color="success"
          >
            Browse All Products
          </Button>
        </Item>
      </Grid>

      <Grid item xs={12}>
        <Item>
          <StandardImageList />
        </Item>
      </Grid>
    </Grid>
  );
}

export { Homepage };
