import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material';
import Home from './views/Home/Home';
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const App = () => {

    const [themeMode, setThemeMode] = useState("light"); 

    const handleThemeChange = () => {
      setThemeMode(themeMode === "light" ? "dark" : "light");
    };


  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <Home checked={themeMode === "dark"} onChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default App
