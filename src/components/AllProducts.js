import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Categorybar } from "./Categorybar";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { getAllProducts } from "../http/httpClient";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function AllProducts() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    let results;
    const fetchData = async () => {
      results = await getAllProducts();
    };
    fetchData().then(() => {
      setAllProducts(results);
    });
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item>
          <Navbar />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Categorybar />
        </Item>
      </Grid>
      {allProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={allProducts} />
          </Item>
        </Grid>
      ) : (
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <Item>
              <Stack spacing={25} direction={"row"}>
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
              </Stack>
            </Item>
            <Item>
              <Stack spacing={25} direction={"row"}>
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
              </Stack>
            </Item>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export { AllProducts };
