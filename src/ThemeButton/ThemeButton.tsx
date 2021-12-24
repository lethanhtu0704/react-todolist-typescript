import { Fab } from "@mui/material";
import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import accordionStyle from "../AccordionStyle/AccordionStyle";
import ThemeContext from "../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeButton = () => {
  const classes = accordionStyle();

  //context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Fab
        size="medium"
        color={theme}
        aria-label="add"
        className={classes.fab}
        onClick={toggleTheme.bind(
          this,
          theme === "primary" ? "secondary" : "primary"
        )}
      >
        {theme === "primary" ? <DarkModeIcon /> : <LightModeIcon />}
      </Fab>
    </div>
  );
};

export default ThemeButton;
