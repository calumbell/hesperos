import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../styles/modules/Layout.scss';
import favicon from '../images/hesperos-favicon.png'

import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  const query = useStaticQuery(graphql`
    query SiteDetails {
      prismicWebsiteDetails {
        data {
          site_brand {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  `);
  
  return (
    <div id="page-container">
      <Helmet>
        <title>Hesperos Choir</title>
        <link rel="icon" href={favicon}></link>
      </Helmet>

      <Navbar 
        id="navigation"
        siteBrand={query.prismicWebsiteDetails.data.site_brand}
      />

      <motion.main
        id="content-wrapper"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{
          type: 'tween',
          mass: 0.1,
          stiffness: 10,
          duration: 0.5,
        }}
      >
        {children}
      </motion.main>
    </div>
  )
}
