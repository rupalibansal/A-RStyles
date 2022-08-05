import {
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../context/StateContext";

function Categorybar(props) {
  const [sortBy, setSortBy] = useState("");
  const [showSort, setShowSort] = useState(true);

  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    if (props.showSorter === false) {
      setShowSort(false);
    }
  });

  const handleSelect = (event) => {
    console.log(event);
    setSortBy(event.target.value);

    dispatch({
      type: "sortProducts",
      productsSortOrder: event.target.value,
    });
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={8}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <Button component={Link} to="/all-products" variant="text">
            All Products
          </Button>
          <Button component={Link} to="/women" variant="text">
            Women
          </Button>
          <Button component={Link} to="/men" variant="text">
            Men
          </Button>
          <Button component={Link} to="/kids" variant="text">
            Kids
          </Button>
          <Button component={Link} to="/baby" variant="text">
            Baby
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={1}></Grid>
      {showSort ? (
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="sort-by-price-label">Sort By Price</InputLabel>
            <Select
              labelId="sort-by-price"
              id="sort-by-price"
              value={state.productsSortOrder}
              label="sort"
              onChange={handleSelect}
            >
              <MenuItem value={"asc"}>Asc</MenuItem>
              <MenuItem value={"desc"}>Desc</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      ) : null}
    </Grid>
  );
}

export { Categorybar };
