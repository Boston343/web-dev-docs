import React, { useEffect } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCards from "@site/src/components/HomepageCards";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";

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
          dark: "hsl(240, 90%, 65%)",
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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // colorMode holds the Docusaurus theme
  const { colorMode } = useColorMode();

  // MUI color mode setting
  const { setMode } = useColorScheme();

  // set Material UI theme based on Docusaurus theme
  useEffect(() => {
    // useEffect: https://www.w3schools.com/react/react_useeffect.asp
    // added useEffect because I was getting an error https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
    setMode(colorMode === "dark" ? "dark" : "light");
  }, [colorMode]);

  return (
    <header>
      <Box
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "background.paper",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "primary.main",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography mb={2} variant="h2">
            {siteConfig.title}
          </Typography>
          <Typography mb={4} variant="h5">
            {siteConfig.tagline}
          </Typography>
          <Button
            className={styles.ifmHoverOverride}
            size="large"
            variant="contained"
            href="/docs/intro"
            color="primary"
          >
            Documentation
          </Button>
        </Container>
      </Box>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <CssVarsProvider theme={extTheme}>
        <Layout
          title={`Reap3r ${siteConfig.title}`}
          description="Documentation on web development tips, tools, and techniques. By Reap3r"
          // description="Description will go into a meta tag in <head />"
        >
          <HomepageHeader />
          <main>
            <HomepageCards />
          </main>
        </Layout>
      </CssVarsProvider>
    </>
  );
}
