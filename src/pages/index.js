import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageCards from "@site/src/components/HomepageCards";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.css";
import { Button } from "@mui/material";

import { ThemeProvider, useColorScheme } from "@mui/material/styles";

const exTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(240, 48%, 47%)",
        },
        secondary: {
          main: "#fff",
        },
        background: {
          // paper: "hsl(240, 48%, 47%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(240, 90%, 70%)",
        },
        secondary: {
          main: "#fff",
        },
        background: {
          // paper: "hsl(240, 90%, 70%)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800, // changed this to match Docusaurus
      lg: 1000,
      xl: 1536,
    },
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
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button
            // className={clsx("button", styles.btnSecondaryCustom)}
            className="button"
            size="large"
            variant="contained"
            href="/docs/intro"
            color="secondary"
          >
            Docs
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <CssVarsProvider theme={exTheme}>
        <Layout
          title={`Reap3r ${siteConfig.title}`}
          description="Documentation on web development tips, tools, and techniques. By Reap3r"
          // description="Description will go into a meta tag in <head />"
        >
          <HomepageHeader />
          <main>
            {/* <HomepageFeatures /> */}
            <HomepageCards />
          </main>
        </Layout>
      </CssVarsProvider>
    </>
  );
}
