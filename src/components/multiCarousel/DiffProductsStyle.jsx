import { makeStyles } from "@mui/styles";
import Bg from "../../assets/coralsolBg.png";
export const useStyles = makeStyles({
  allCart: {
    padding: "0px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});
