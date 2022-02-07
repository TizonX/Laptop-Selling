import { makeStyles } from "@mui/styles";
import Bg from "../assets/backGroundImage.png";

export const useStyles = makeStyles({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${Bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    bodyLeft: {
      minHeight: "100vh",
      // background: "gray",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
    },
    bodyHeading: {
      color: "#404040",
      // marginLeft: "100px !important",
      fontSize: "38px !important",
      fontWeight: "450 !important",
      marginTop: "0px !important",
    },
    bodyPara: {
      marginTop: "10px !important",
      fontSize: "18px !important",
      // marginLeft: "100px !important",
    },
    bodyButtons: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // marginLeft: "100px",
      marginTop: "50px",
      width: "240px",
    },
    bodyButton: {
      borderRadius: "0px !important",
    },
    bodyRight: {
      height: "100vh",
      // backgroundColor: "gray",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bodyImage: {
      width: "75%",
      height: "50%",
      marginTop: "130px",
    },
    bodySliderButtons: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "150px",
      marginTop: "50px",
    },
    dot: {
      cursor: "pointer",
      height: "15px",
      width: "15px",
      margin: "0 2px",
      backgroundColor: "#bbb",
      borderRadius: "50%",
      display: "inline-block",
      transition: "background-color 0.6s ease",
      "&:hover": {
        backgroundColor: "#717171",
      },
    },
  });