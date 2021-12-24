import { PropTypes } from "@mui/material";
import { createContext } from "react";

export interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

export const themeContextDataDefault = {
  theme: "secondary" as PropTypes.Color,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextDefault>(
  themeContextDataDefault
);

export default ThemeContext;
