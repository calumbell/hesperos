import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import MenuExpandButton from './MenuExpandButton';
import DropDownLink from './DropDownLink';
import * as styles from './Navbar.module.scss';

export default function Navbar({ siteBrand }) {
  // determines whether the pop-up menu is expanded or hidden
  const [isExpanded, setExpanded] = useState(false);

  // Logic for condional rendering based of browser window
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  /* [] as 2nd arg to only attach listener on   *
   * rtns cleanup fnc that runs on unmount      */
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftSide}>
        <Link to="/" onClick={() => setExpanded(false)}>
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
          ${styles.navbarRightSide} 
          ${isExpanded && styles.popupMenu}
        `}
        
        // close hamburg. menu when the user clicks on it or presses Esc/Enter while focused
        onClick={() => setExpanded(false)}
        onKeyDown={(e) => { if (['Escape', 'Enter'].includes(e.key)) setExpanded(false)}}
        aria-hidden='true'
      >
        <Link to="/about/">ABOUT</Link>
        { width > breakpoint ?
          <DropDownLink
            dropDownName = "EVENTS"
            defaultRoute = "/events"
            links = {[
              {
                displayName: "UPCOMING",
                route: "/events",
              },
              {
                displayName: "PAST",
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
