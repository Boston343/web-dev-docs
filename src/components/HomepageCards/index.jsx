import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsShieldLock, BsServer } from "react-icons/bs";
import { Box } from "@mui/system";

const FeaturedDocs = [
  {
    title: "Front End Basics",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
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
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    icon: <FaReact />,
    link: "/docs/category/advanced",
    description: (
      <>
        React, Next.js, and various UI libraries like Material UI, Bootstrap,
        and Tailwind CSS.
      </>
    ),
  },
  {
    title: "Back End Design",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
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
    title: "Security and Authentication",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    icon: <BsShieldLock />,
    link: "/docs/security-and-authentication",
    description: (
      <>
        Examples of encryption, hashing, salting, cookies, sessions, 0Auth, and
        more.
      </>
    ),
  },
  {
    title: "Databases",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    icon: "",
    link: "/docs/category/databases",
    description: (
      <>
        A database is an organized collection of structured information or data,
        typically stored electronically in a computer system.
      </>
    ),
  },
];

function FeatureCard({ title, icon, link, description }) {
  return (
    <Grid item xs={12} sm={10} md={5} lg={4} maxWidth="sm">
      <Card variant="outlined" sx={{ height: "100%", textAlign: "center" }}>
        <CardActionArea href={link} sx={{ height: "100%" }}>
          <CardContent>
            <Box sx={{ p: 2 }}>
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

export default function HomepageCards() {
  return (
    <Container maxWidth="lg">
      <h1>Documentation Quick Links</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
        {FeaturedDocs.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </Grid>
    </Container>
  );
}
