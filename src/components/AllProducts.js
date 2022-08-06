import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Categorybar } from "./Categorybar";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { getAllProducts } from "../http/httpClient";
import { LoadingSkeleton } from "./LoadingSkeleton";

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
        <LoadingSkeleton />
      )}
    </Grid>
  );
}

export { AllProducts };
