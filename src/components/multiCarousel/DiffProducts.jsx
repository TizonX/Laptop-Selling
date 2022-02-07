import React from "react";
import Carousel from "react-elastic-carousel";
import Cart from "./Cart";
import { Box } from "@mui/material";
import { useStyles } from "./DiffProductsStyle";

const DiffProducts = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const breakpoint = [
    {
      width: 500,
      itemsToShow: 1,
    },
    {
      width: 765,
      itemsToShow: 2,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
    {
      width: 1500,
      itemsToShow: 4,
    },
  ];
  const classes = useStyles();
  return (
    <Box component="div" className={classes.allCart}>
      <Carousel breakPoints={breakpoint}>
        {arr.map((i) => (
          <Cart key={i} />
        ))}
      </Carousel>
    </Box>
  );
};

export default DiffProducts;
