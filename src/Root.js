// https://medium.com/@kevinwilliams.dev/adding-material-ui-to-docusaurus-e1889bf81515
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "@site/src/components/App/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "",
      light: "",
      dark: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
    },
  },
});

export default function Root({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <App children={children} />
      </ThemeProvider>
    </>
  );
}

// import React from "react";
// import App from "@site/src/components/App/index";

// export default function Root({ children }) {
//   return (
//     <>
//       <App children={children} />
//     </>
//   );
// }
