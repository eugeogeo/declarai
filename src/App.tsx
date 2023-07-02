import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./styles/theme"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes"
import { UserProvider } from "./context/userContext"

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <CssBaseline />
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
    </>
  )
}

export default App
