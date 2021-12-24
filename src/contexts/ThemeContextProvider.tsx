import { PropTypes } from "@mui/material";
import React, { ReactNode, useState } from "react";
import ThemeContext, { themeContextDataDefault } from "./ThemeContext";
interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(
    themeContextDataDefault.theme
  );

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  const themeContextData = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
