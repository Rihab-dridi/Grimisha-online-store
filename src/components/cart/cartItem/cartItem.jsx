import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyle from "./styles";

export default function CartItem({
  item,
  addToCartHandler,
  updateCartHandler,
  removeFromCartHandler,
  emptyCartHandler,
  testHanler
}) {
  const classes = useStyle();
  console.log(item);
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      ></CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted} dt</Typography>
      </CardContent>
      <CardActions>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small "
            onClick={() =>
              updateCartHandler(item.id, item.quantity - 1)
            }
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small "
            onClick={() => updateCartHandler(item.id, item.quantity+1)}
          >
            +
          </Button>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => removeFromCartHandler(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
