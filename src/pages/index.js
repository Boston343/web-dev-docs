import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageCards from "@site/src/components/HomepageCards";

import styles from "./index.module.css";
import { Button } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
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
});

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Docs
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}
