import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Categorybar } from "./Categorybar";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { API_KEY } from "../common/apiKey";
import { LoadingSkeleton } from "./LoadingSkeleton";

const axios = require("axios").default;

function Kids() {
  const [kidsProducts, setkidProducts] = useState(null);
  const getKidProducts = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "au",
        lang: "en",
        currentpage: "0",
        pagesize: "50",
        categories: "kids_all",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setkidProducts(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getKidProducts();
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
      {kidsProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={kidsProducts} />
          </Item>
        </Grid>
      ) : (
        <LoadingSkeleton />
      )}
    </Grid>
  );
}

export { Kids };
