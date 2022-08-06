import { Navbar } from "./Navbar";
import { Grid, Stack } from "@mui/material";
import { Item } from "../common/Item";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Categorybar } from "./Categorybar";
import { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router";
import Typography from "@mui/material/Typography";
import { StateContext } from "../context/StateContext";
import React from "react";
import { API_KEY } from "../common/apiKey";
import { useSnackbar } from "notistack";
import Skeleton from "@mui/material/Skeleton";

const axios = require("axios").default;

function ProductDetail() {
  const params = useParams();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const { dispatch } = useContext(StateContext);
  const { enqueueSnackbar } = useSnackbar();

  const [productDetail, setProductDetail] = useState();
  const getProductDetails = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
      params: { lang: "en", productcode: params.code, country: "au" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const { name, description, code, whitePrice } = response.data.product;
        const imageUrl = query.get("imageUrl");
        const productDetail = {
          code,
          name,
          description,
          image: "",
          price: whitePrice.price,
          url: imageUrl.concat("&call=url[file:/product/style]"),
        };
        setProductDetail(productDetail);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const showSnackbar = () => {
    enqueueSnackbar("Item added to bag", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
  };

  return (
    <Grid container spacing={0}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <Navbar />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Categorybar showSorter={false} />
          </Item>
        </Grid>
      </Grid>
      {productDetail ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs={4}
            md={10}
            lg={10}
            justifyContent="center"
            alignItems="center"
          >
            <img src={`${productDetail.url}`} />
          </Grid>

          <Grid item xs={4} md={10} lg={10}>
            <Stack
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
            >
              <Typography gutterBottom variant="h4" component="div">
                {productDetail.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                ${productDetail.price}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ShoppingBagIcon />}
                onClick={() => {
                  showSnackbar();
                  dispatch({
                    type: "addToBag",
                    productDetail: productDetail,
                  });
                }}
              >
                Add to bag
              </Button>
              <Typography
                paragraph="true"
                gutterBottom
                variant="body1"
                component="div"
              >
                <Typography variant="h6">Product Details: </Typography>
                {productDetail.description}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Item>
            <Stack spacing={20} direction={"row"}>
              <Skeleton variant="rectangular" width={350} height={220} />
              <Stack>
                <Skeleton variant="text" width={350} height={20} />
                <Skeleton variant="text" width={350} height={20} />
                <Skeleton variant="text" width={350} height={20} />
              </Stack>
            </Stack>
          </Item>
        </Grid>
      )}
    </Grid>
  );
}

export { ProductDetail };
