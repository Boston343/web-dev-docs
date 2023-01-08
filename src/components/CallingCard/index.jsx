import React from "react";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
// import theme from "@site/src/pages/mui-theme";
import theme from "@site/src/components/MuiTheme";

export default function CallingCard() {
  return (
    <CssVarsProvider theme={theme}>
      <Box
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          backgroundColor: "background.paper",
          borderTop: 3,
          borderBottom: 3,
          // borderImage: "linear-gradient(to right, blue, red)",
          borderImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
          borderImageSlice: 1,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight="700"
              sx={{
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Go forth and do great things.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CssVarsProvider>
  );
}
