import React from "react";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function CallingCard() {
  return (
    <Box
      sx={{
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: "background.paper",
        borderTop: 2,
        borderBottom: 2,
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
  );
}
