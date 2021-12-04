import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './Layout.scss';

import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  const query = useStaticQuery(graphql`
    query SiteDetails {
      prismicWebsiteDetails {
        data {
          site_brand {
            url
            alt
          }
        }
      }
    }
  `);
  return (
    <div id="page-container">
      <Navbar 
        id="navigation"
        siteBrand={query.prismicWebsiteDetails.data.site_brand}
      />

      <main id="content-wrapper">
        {children}
      </main>
    </div>
  )
}
