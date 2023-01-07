import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const FeaturedDocs = [
  {
    title: "Front End Web Design Basics",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    icon: <></>,
    link: "/docs/category/basics",
    description: (
      <>
        The basics of building beautiful websites. HTML, CSS, Flexbox,
        Javascript, JS DOM, and jQuery.
      </>
    ),
  },
  {
    title: "React",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    icon: <></>,
    link: "/docs/Front%20End/Advanced/react",
    description: (
      <>
        React is a popular Javascript library for building user interfaces. It
        was used to create this homepage, and used by Docusaurus!
      </>
    ),
  },
  {
    title: "Security and Authentication",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    icon: <></>,
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
    icon: <></>,
    link: "/docs/category/databases",
    description: (
      <>
        A database is an organized collection of structured information or data,
        typically stored electronically in a computer system.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ link, title, description }) {
  return (
    <Card
      color="primary"
      variant="outlined"
      sx={{ minWidth: 400, maxWidth: 400 }}
    >
      <CardActionArea href={link} sx={{ height: 250 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    // <div className="card">
    //   <div className="card__header">
    //     <h3>{title}</h3>
    //   </div>
    //   <div className="card__body">
    //     <p>{description}</p>
    //   </div>
    // </div>
  );
}

export default function HomepageCards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeaturedDocs.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
