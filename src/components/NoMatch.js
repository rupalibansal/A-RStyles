import { Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";

function NoMatch() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h5">Page Not found</Typography>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export { NoMatch };
