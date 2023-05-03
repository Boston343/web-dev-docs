import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Box from "@mui/system/Box";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsShieldLock, BsServer } from "react-icons/bs";
import { SiGraphql } from "react-icons/si";

//-------------------------------------------------------------------
//                    Array for Featured Cards
//-------------------------------------------------------------------
const FeaturedDocs = [
  {
    title: "Front End Basics",
    icon: <CgWebsite />,
    link: "/docs/category/basics",
    description: (
      <>
        The basics of building beautiful websites. HTML, CSS, Flexbox,
        Javascript, JS DOM, and jQuery.
      </>
    ),
  },
  {
    title: "Front End Advanced",
    icon: <FaReact />,
    link: "/docs/category/advanced",
    description: (
      <>
        Astro, React, and various UI libraries like Material UI, Bootstrap, and
        Tailwind CSS.
      </>
    ),
  },
  {
    title: "Back End Design",
    icon: <BsServer />,
    link: "/docs/category/back-end-web-design",
    description: (
      <>
        Frameworks and tools to use for creating a website back end - such as
        Node, Express, EJS, and Databases.
      </>
    ),
  },
  {
    title: "Serverless Architecture",
    icon: <BsServer />,
    link: "/docs/category/serverless-architecture",
    description: (
      <>
        What is it and how to use it? Jamstack, Serverless Functions, and
        Back-end as a Service (BaaS).
      </>
    ),
  },
  {
    title: "APIs",
    icon: <SiGraphql />,
    link: "/docs/api",
    description: (
      <>
        Applications commonly use REST or GraphQL APIs to allow applications to
        talk to each other.
      </>
    ),
  },
  {
    title: "Security and Auth",
    icon: <BsShieldLock />,
    link: "/docs/security-and-authentication",
    description: (
      <>
        Examples of encryption, hashing, salting, cookies, sessions, OAuth, and
        more.
      </>
    ),
  },
];

//-------------------------------------------------------------------
//                    Feature Card Component
//-------------------------------------------------------------------
function FeatureCard({ title, icon, link, description }) {
  return (
    <Grid item xs={12} sm={10} md={5} lg={4} maxWidth="sm">
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          textAlign: "center",
          boxShadow: 3,
          // bgcolor: "success.light",
        }}
      >
        <CardActionArea
          href={link}
          sx={{ height: "100%" }}
          className={styles.ifmHoverOverride}
        >
          <CardContent>
            <Box sx={{ p: 1.5 }}>
              <IconContext.Provider value={{ size: 30 }}>
                {icon}
              </IconContext.Provider>
            </Box>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

//-------------------------------------------------------------------
//                  Homepage Cards Component
//-------------------------------------------------------------------
export default function HomepageCards() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 8, paddingBottom: 4, textAlign: "center" }}>
        <Typography variant="h4">Documentation Quick Links</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ paddingBottom: 8 }}
      >
        {FeaturedDocs.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </Grid>
    </Container>
  );
}
