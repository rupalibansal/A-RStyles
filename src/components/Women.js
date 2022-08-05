import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Categorybar } from "./Categorybar";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { Spinner } from "./Spinner";
import { API_KEY } from "../common/apiKey";

const axios = require("axios").default;

function Women() {
  const [womenProducts, setwomenProducts] = useState(null);
  const getWomenProducts = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "au",
        lang: "en",
        currentpage: "0",
        pagesize: "50",
        categories: "ladies_all",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setwomenProducts(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getWomenProducts();
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
      {womenProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={womenProducts} />
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
              <Spinner />
            </Item>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export { Women };
