import { Navbar } from "./Navbar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Categorybar } from "./Categorybar";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { Spinner } from "./Spinner";
import { API_KEY } from "../common/apiKey";

const axios = require("axios").default;

function Men() {
  const [menProducts, setMenProducts] = useState(null);
  const getMenProducts = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
      params: {
        country: "au",
        lang: "en",
        currentpage: "0",
        pagesize: "50",
        categories: "men_all",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMenProducts(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getMenProducts();
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
      {menProducts ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={menProducts} />
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

export { Men };
