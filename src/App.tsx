import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import { createTheme } from "@mui/material/styles";
import { color, IColor } from "./utils/colors";
import { getThemeBackgroundColor } from "./utils/functions";

// declaring module so that customColors can be used in createTheme
declare module "@mui/material/styles" {
  interface Palette {
    customColors: IColor;
  }
  interface PaletteOptions {
    customColors?: IColor;
  }
}
// creating light theme configuration.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    customColors: { ...color },
  },
});

// creating dark theme configuration.
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    customColors:{...color},
  },
});

const App = () => {
  // using state to manage the current theme mode (light or dark).
  const [themeMode, setThemeMode] = useState("dark");

  // using handler to toggle between light and dark themes.
  const handleThemeChange = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // using to apply the background color to the body element
    document.body.style.backgroundColor = getThemeBackgroundColor({
      palette: { mode: themeMode },
    });

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        getThemeBackgroundColor({
          palette: { mode: themeMode },
        })
      );
    }
  }, [themeMode]);

  // rendering the app with ThemeProvider to apply the selected theme.
  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <Home isDarkMode={themeMode === "dark"} onThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
};

export default App;
