import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartItem/cartItem";
import useStyles from "./styles";
export default function Cart({
  cart,
  addToCartHandler,
  testHanler,
  updateCartHandler,
  removeFromCartHandler,
  emptyCartHandler,
}) {
  console.log(cart);
  //console.log(cart.line_items.length);
  const classes = useStyles();
  const isEmpty = !cart.line_items?.length;
  const EmptyCart = () => (
    <Typography
      component={Link}
      to="/"
      variant="subtitle1"
      className={classes.link}
    >
      Start adding some items
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3} className={classes.gridContainer}>
        {cart.line_items?.map((item, key) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              key={item.id}
              addToCartHandler={addToCartHandler}
              updateCartHandler={updateCartHandler}
              removeFromCartHandler={removeFromCartHandler}
              emptyCartHandler={emptyCartHandler}
              testHanler={testHanler}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          subtotal: {cart?.subtotal?.formatted} Dt
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={()=>emptyCartHandler()}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link} to='/checkout'
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
