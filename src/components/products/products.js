import { Grid } from "@material-ui/core";
import React from "react";
import Product from "../product/product";
import useStyles from "./styles";

export default function Products({ products, addToCartHandler }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifycontent="center" spacing={3}  item  >
        {products?.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3} lg={3}>
            <Product product={product} addToCartHandler={addToCartHandler} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
