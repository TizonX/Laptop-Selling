import React, { useState } from "react";
import { useStyles } from "./BodyStyle";
import Laptop1 from "../assets/laptopBody1.png";
import Laptop2 from "../assets/laptopBody2.png";
import Laptop3 from "../assets/laptopBody3.png";
import { CssBaseline, Grid, Typography, Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Body = () => {
  const [updateCorosol, setUpdateCorosol] = useState(0);
  const laptopImages = [Laptop1, Laptop2, Laptop3];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs></Grid>
        <Grid item md={5} xs={12}>
          <Box component="div" className={classes.bodyLeft}>
            <Typography variant="h3" className={classes.bodyHeading}>
              Laptop for the future
            </Typography>
            <Typography variant="span" className={classes.bodyPara}>
              The new 14 inch bezelss display ofering a 4k display with topuch
              screen
            </Typography>
            <Box component="div" className={classes.bodyButtons}>
              <Button variant="outlined" className={classes.bodyButton}>
                14 inch
              </Button>
              <Button variant="contained" className={classes.bodyButton}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>{" "}
        <Grid item md={5} xs={12}>
          <Box component="div" className={classes.bodyRight}>
            <Box
              component="img"
              src={laptopImages[updateCorosol]}
              alt="laptop"
              className={classes.bodyImage}
            />
            <Box component="div" className={classes.bodySliderButtons}>
              <ArrowBackIosIcon />
              <Box
                component="span"
                className={classes.dot}
                onClick={() => setUpdateCorosol(0)}
              ></Box>
              <Box
                component="span"
                className={classes.dot}
                onClick={() => setUpdateCorosol(1)}
              ></Box>
              <Box
                component="span"
                className={classes.dot}
                onClick={() => setUpdateCorosol(2)}
              ></Box>
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default Body;
