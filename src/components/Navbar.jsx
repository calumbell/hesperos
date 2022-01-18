import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import MenuExpandButton from './MenuExpandButton';
import DropDownLink from './DropDownLink';
import * as styles from './Navbar.module.scss';

export default function Navbar({ siteBrand }) {
  const [isExpanded, setExpanded] = useState(false);

  // Logic for condionally rendering based of browser window
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    // clean-up function to remove listener on unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav 
      className={styles.navbar}
    >
      <div className={styles.navbarLeftSide}>
        <Link 
          to="/"
          onClick={() => setExpanded(false)}
        >
          <GatsbyImage 
            className={styles.siteBrand}
            image={getImage(siteBrand.gatsbyImageData)}
            alt={siteBrand.alt}
          />
        </Link>
      </div>
      
      <MenuExpandButton 
        isExpanded={isExpanded}
        setExpanded={setExpanded}
      />

      <div 
        className={`
          ${ styles.navbarRightSide }
          ${ isExpanded && styles.popupMenu}
        `}
        
        onClick={() => setExpanded(false)}
      >
        <Link to="/about/">ABOUT</Link>
        { width > breakpoint ?
          <DropDownLink
            dropDownName = "EVENTS"
            defaultRoute = "/events"
            links = {[
              {
                shortName: "UPCOMING",
                longName: "UPCOMING EVENTS",
                route: "/events",
              },
              {
                shortName: "ARCHIVE",
                longName: "EVENTS ARCHIVE",
                route: "/pastEvents",
              }
            ]}
          />
          : <>
            <Link to="/events/">UPCOMING EVENTS</Link>
            <Link to="/pastEvents/">EVENTS ARCHIVE</Link>
          </>
        }
  
        <Link to="/news/">NEWS</Link>
        <Link to="/support/">SUPPORT US</Link>
        <Link to="/join/">GET INVOLVED</Link>
        <Link to="/contact/">CONTACT</Link>
      </div>
    </nav>
  )
}
