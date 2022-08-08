import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navbar } from "./Navbar";
import { Categorybar } from "./Categorybar";
import { Item } from "../common/Item";
import { Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../context/StateContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const gridStyles = {
  paddingBottom: 2,
  paddingRight: 2,
  marginTop: 2,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 2000,
  height: 500,
};

const quantityStyles = {
  paddingLeft: 1,
  paddingRight: 1,
};

function ShoppingBag() {
  const { state, dispatch } = useContext(StateContext);
  const [orderTotal, setOrderTotal] = useState(0);
  const { itemsInBag: rows } = state;

  useEffect(() => {
    let total = 0;
    rows.map((product) => {
      total += parseFloat((product.quantity * product.price).toFixed(2));
    });
    setOrderTotal(total);
  });

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
            <Categorybar showSorter={false} />
          </Item>
        </Grid>
      </Grid>
      {rows.length == 0 ? (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h5">No items in cart</Typography>
            </Item>
          </Grid>
        </Grid>
      ) : (
        <Stack direction="row">
          <Grid container xs={4} md={6} spacing={0} sx={gridStyles}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price for each</TableCell>
                    <TableCell align="right">OrderTotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        <ButtonGroup>
                          <Button
                            variant="contained"
                            aria-label="reduce"
                            disabled={row.quantity === 1}
                            onClick={() => {
                              dispatch({
                                type: "removeFromBag",
                                productDetail: { code: row.code },
                              });
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Typography sx={quantityStyles}>
                            {row.quantity}
                          </Typography>
                          <Button
                            variant="contained"
                            aria-label="increase"
                            onClick={() => {
                              dispatch({
                                type: "addToBag",
                                productDetail: { code: row.code },
                              });
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              dispatch({
                                type: "removeProductFromBag",
                                productDetail: { code: row.code },
                              });
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ButtonGroup>
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        {(row.quantity * row.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid container xs={2} md={4} spacing={0} sx={gridStyles}>
            <Stack spacing={3}>
              <Typography variant="h4" component="div">
                {`Total Due today: $${orderTotal.toFixed(2)}`}
              </Typography>
              <Button disabled variant="contained" color="success">
                Checkout
              </Button>
            </Stack>
          </Grid>
        </Stack>
      )}
    </>
  );
}

export { ShoppingBag };
