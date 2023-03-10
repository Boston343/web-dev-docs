import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import HomepageCards from "@site/src/components/HomepageCards";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

//-------------------------------------------------------------------
// Theme for the blog button specifically
const btnTheme = extendTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.main,
          borderWidth: 1,
          borderStyle: "solid",
          "&:hover": {
            backgroundColor: theme.vars.palette.primary.main,
            color: "white",
          },
          // [theme.breakpoints.up("sm")]: {
          //   marginRight: "1rem",
          //   marginBottom: 0,
          // },
          // ["@media (min-width: 350px)"]: {
          //   marginRight: "1rem",
          //   marginBottom: 0,
          // },
        }),
      },
    },
  },
});

//-------------------------------------------------------------------
//                  Homepage Header Component
//-------------------------------------------------------------------
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <Box
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "background.paper",

          borderTop: 3,
          borderBottom: 3,
          // borderColor: "primary.main",
          // borderImage: "linear-gradient(to right, blue, red)",
          borderImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
          borderImageSlice: 1,
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography fontWeight={"500"} mb={2} variant="h2">
            {siteConfig.title}
          </Typography>
          <Typography mb={4} variant="h5">
            {siteConfig.tagline}
          </Typography>

          <Grid container spacing={{ xs: 2 }} justifyContent="center">
            <Grid item>
              <CssVarsProvider theme={btnTheme}>
                <Button
                  // className={styles.buttonBlog}
                  size="large"
                  variant="outlined"
                  href="/blog"
                  color="primary"
                >
                  Blog
                </Button>
              </CssVarsProvider>
            </Grid>

            <Grid item>
              <Button
                className={styles.ifmHoverOverride}
                size="large"
                variant="contained"
                href="/docs/intro"
                color="primary"
              >
                Documentation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </header>
  );
}

//-------------------------------------------------------------------
//                      Home Component
//-------------------------------------------------------------------
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description="Documentation on web development tips, tools, and techniques. By Web Reaper"
        // description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <HomepageCards />
        </main>
      </Layout>
    </>
  );
}
