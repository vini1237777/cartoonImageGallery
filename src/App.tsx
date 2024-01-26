import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import { createTheme } from "@mui/material/styles";

// Creating light theme configuration.
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Creating dark theme configuration.
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  // State to manage the current theme mode (light or dark).
  const [themeMode, setThemeMode] = useState("light");

  // Handler to toggle between light and dark themes.
  const handleThemeChange = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  // Rendering the app with ThemeProvider to apply the selected theme.
  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {/* Passing theme related props to the Home component */}
      <Home checked={themeMode === "dark"} onChange={handleThemeChange} />
    </ThemeProvider>
  );
};

export default App;
