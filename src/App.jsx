import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
  typography: {
    fontFamily: "-apple-system-ui-serif, ui-serif, Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
