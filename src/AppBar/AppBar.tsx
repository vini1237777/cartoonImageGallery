import React from "react";
import {AppBar as MuiAppBar} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button,useTheme } from "@mui/material";
import { IObject } from "../utils/types";
import FeaturesDialog from "./FeaturesDialog/FeaturesDialog";
import { GitHub } from "@mui/icons-material";
import { styles as appBarStyles } from "./appBarStyles";
import Heading from "../components/Heading/Heading";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { githubLink, rickandmortyapi } from "../utils/contants";

export default function AppBar({ isDarkMode, onThemeChange }: IObject) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const theme = useTheme();
  const styles = appBarStyles(theme);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFeaturesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const renderModal = (
    <FeaturesDialog handleMenuClose={handleMenuClose} isMenuOpen={isMenuOpen} />
  );

  return (
    <Box sx={{ ...styles.container }}>
      <MuiAppBar sx={{ ...styles.wrapper }}>
        <Toolbar sx={{ ...styles.toolbar }}>
          <Heading />
          <Box sx={{ ...styles.buttonWrapper }}>
            <Button onClick={handleFeaturesMenuOpen} sx={{ ...styles.text }}>
              Features
            </Button>
            <IconButton
              sx={{ ...styles.iconButton }}
              onClick={() =>
                window.open(
                  githubLink,
                  "_blank"
                )
              }
            >
              <GitHub sx={{ ...styles.icon }} />
            </IconButton>
            {!isDarkMode ? (
              <IconButton sx={{ ...styles.iconButton }} onClick={onThemeChange}>
                <DarkModeOutlinedIcon sx={{ ...styles.icon }} />
              </IconButton>
            ) : (
              <IconButton sx={{ ...styles.iconButton }} onClick={onThemeChange}>
                <LightModeOutlinedIcon sx={{ ...styles.icon }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </MuiAppBar>
      {renderModal}
    </Box>
  );
}
