import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EFC32F",
      main: "#91376B",
      dark: "#3d162d",
    },
    secondary:{
      main: "#af3b3b",
    },
    grey:{
      100:"#F6F8F7",
    },
    background:{
      paper: "#F6F8F7",
    }
  },
});

export default theme;
