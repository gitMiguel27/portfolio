import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121'
    }
  },
  typography: {
    fontFamily: 'Old+Standard+TT',
    fontWeightRegular: 400,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
