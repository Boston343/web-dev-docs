import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// General MUI theme
const extTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(240, 48%, 47%)",
          dark: "hsl(240, 48%, 38%)",
        },
        secondary: {
          main: "#fff",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(240, 90%, 70%)",
          dark: "hsl(240, 90%, 63%)",
        },
        secondary: {
          main: "#fff",
        },
        background: {
          paper: "hsl(210, 3%, 15%)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800, // changed this to match Docusaurus (default 900)
      lg: 1000, // also changed this (default 1200)
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      "'Open Sans'",
      "Roboto",
      "'Helvetica Neue'",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default extTheme;
