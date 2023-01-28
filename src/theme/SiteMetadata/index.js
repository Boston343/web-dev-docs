import React from "react";
import SiteMetadata from "@theme-original/SiteMetadata";
import Head from "@docusaurus/Head"; // added

export default function SiteMetadataWrapper(props) {
  return (
    <>
      <SiteMetadata {...props} />
      {/* added below */}
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#b6b6fb"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
    </>
  );
}
