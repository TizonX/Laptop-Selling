import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Laptop from "../../assets/laptopBody1.png";
import { Box, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "430px",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center !important",
    margin: "10px 0px",
    backgroundColor:'#fff'
  },
  cartImage: {
    width: "80%",
    height: "50%",
  },
  cartDetails: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start !important",
    // border: "1px solid black",
    width: "100%",
    padding: "10px 10px",
  },
  cartHeading: {
    fontSize: "22px",
    fontWeight: "600",
    margin: "20px 0px !important",
  },
  cartButton: {
    marginTop: "10px !important",
  },
});

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.card}>
      <Box
        component="img"
        src={Laptop}
        alt="laptop"
        className={classes.cartImage}
      />
      <Box component="div" className={classes.cartDetails}>
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            readOnly
            defaultValue={2.5}
            precision={0.5}
          />
        </Stack>
        <Typography variant="span" className={classes.cartHeading}>
          Hp dark Laptop
        </Typography>
        <Button variant="contained" fullWidth>
          Add To Cart
        </Button>
        <Button variant="outlined" fullWidth className={classes.cartButton}>
          Read More
        </Button>
      </Box>
    </Box>
  );
}
