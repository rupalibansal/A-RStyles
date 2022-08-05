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

  // console.log(props.data);

  useEffect(() => {
   
    setProductsToDisplay(props.data);
  }, [props.data]);

  useEffect(() => {
    setSortOrder(state.productsSortOrder);
  }, [state.productsSortOrder]);

  useEffect(() => {
    if (sortOrder) {
      console.log("PTD", productsToDisplay);
      setProductsToDisplay([
        ...productsToDisplay.sort((a, b) => {
          //console.log(a, b);
          return sortOrder === "asc"
            ? a.price.value - b.price.value
            : b.price.value - a.price.value;
        }),
      ]);
    }
  }, [sortOrder]);

  

  return (
    <Grid container spacing={0}>

      {productsToDisplay.map((product, k) => {
        {
          /* console.log(product); */
        }
        const dataToDisplay = {
          name: product.name,
          price: product.price.value,
          image: product.images[0].url,
        };
        return (
          <Grid item xs={4}>
            <Link
              to={`/product/${product.articles[0].code}?imageUrl=${dataToDisplay.image}`}
              key={k}
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
