import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';

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

      <motion.main id="content-wrapper"
        initial={{ opacity: 0, x: -25}}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0}}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 100,
          duration: 0.5,
        }}
      >
        {children}
      </motion.main>
    </div>
  )
}
