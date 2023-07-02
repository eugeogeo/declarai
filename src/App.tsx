import { CssBaseline, ThemeProvider } from "@mui/material"
import Login from "./pages/login"
import theme from "./styles/theme"

function App() {

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
    </>
  )
}

export default App
