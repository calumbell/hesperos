import React from "react";
import favicon from "../../images/hesperos-favicon.png";

import { useSiteMetadata } from "../../hooks/useSiteMetadata";

const SEO = () => {
  const { title, siteUrl } = useSiteMetadata();
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href={favicon} />
    </>
  );
};

export default SEO;
