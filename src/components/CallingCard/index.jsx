import React from "react";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import theme from "@site/src/pages/mui-theme";

export default function CallingCard() {
  return (
    <CssVarsProvider theme={theme}>
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: "background.paper",
          borderTop: 5,
          borderBottom: 5,
          borderColor: "primary.main",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              fontWeight="700"
              sx={{ color: "primary.main", textAlign: "center" }}
            >
              Go forth and do great things.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </CssVarsProvider>
  );
}
