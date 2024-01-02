import React from "react";
import favicon from "../images/hesperos-favicon.png";

import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Seo = ({ title, description, path, image }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    image: defaultImage,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    image: image ?? defaultImage,
    url: siteUrl + (path || ""),
    twitterUsername,
    keywords: path === "/" ? "hesperos, choir, london, chamber choir" : "",
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <link rel="icon" href={favicon} />
    </>
  );
};

export default Seo;
