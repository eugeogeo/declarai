import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./styles/theme"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
