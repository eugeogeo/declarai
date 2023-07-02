import { createTheme } from "@mui/material/styles";

// TODO: cliente pediu para rever paleta
const theme = createTheme({
  palette: {
    primary: {
      light: "#EFC32F",
      main: "#000000",
      dark: "#3d162d",
    },
    secondary:{
      main: "#af3b3b",
    },
    grey:{
      100:"#F6F8F7",
    },
    background:{
      paper: "#EFC32F",
    }
  },
});

export default theme;
