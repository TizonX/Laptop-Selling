import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.jpg";
import { useStyles } from "./HeaderStyle";
//
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            className={classes.logo}
          ></Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Three Dots
          </Typography>
          <Box component="div" sx={{ flexGrow: 1 }} className={classes.hLinks}>
            <Button variant="text">Specs</Button>
            <Button variant="text">Products</Button>
            <Button variant="text">Contact</Button>

            <StyledBadge badgeContent={4} color="primary" >
              <ShoppingCartIcon  />
            </StyledBadge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
