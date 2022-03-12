import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
export default function Product({ product,addToCartHandler }) {
  const classes = useStyles();
  console.log(product);
  return (
    <Card className={classes.root} md={12}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {product.price.formatted} dt
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          className={classes.description}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>addToCartHandler(product.id,1)}>
          <AddShoppingCart    />
        </IconButton>
      </CardActions>
    </Card>
  );
}
