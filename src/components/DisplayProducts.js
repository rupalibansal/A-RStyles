import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { Product } from "./Product";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";

function DisplayProducts(props) {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const { state } = useContext(StateContext);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setProductsToDisplay(props.data);
  }, [props.data]);

  useEffect(() => {
    setSortOrder(state.productsSortOrder);
  }, [state.productsSortOrder]);

  useEffect(() => {
    if (sortOrder) {
      setProductsToDisplay([
        ...productsToDisplay.sort((a, b) => {
          return sortOrder === "asc"
            ? a.whitePrice.value - b.whitePrice.value
            : b.whitePrice.value - a.whitePrice.value;
        }),
      ]);
    }
  }, [sortOrder]);

  return (
    <Grid container spacing={0}>
      {productsToDisplay.map((product, k) => {
        const dataToDisplay = {
          name: product.name,
          price: product.whitePrice.value,
          image: product.images[0].url,
        };
        return (
          <Grid key={k} item xs={6} md={4} lg={4}>
            <Link
              to={`/product/${product.articles[0].code}?imageUrl=${dataToDisplay.image}`}
            >
              <Item>
                <Product productData={dataToDisplay} />
              </Item>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export { DisplayProducts };
