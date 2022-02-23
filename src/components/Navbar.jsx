import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import MenuExpandButton from './MenuExpandButton';
import DropDownLink from './DropDownLink';
import * as styles from '../styles/modules/Navbar.module.scss';

export default function Navbar({ siteBrand }) {
  // determines whether the pop-up menu is expanded or hidden
  const [isExpanded, setExpanded] = useState(false);

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
        <DropDownLink
          dropDownName = "EVENTS"
          defaultRoute = "/events"
          links = {[
            {
              displayName: "UPCOMING",
              route: "/events",
              expandedName: "UPCOMING EVENTS",
            },
            {
              displayName: "PAST",
              route: "/pastEvents",
              expandedName: "PAST EVENTS",
            }
          ]}
        />
        <DropDownLink
          dropDownName = "NEWS"
          defaultRoute = "/news"
          links ={[
            {
              displayName: "NEWS",
              route: "/news"
            },
            {
              displayName: "NOTES",
              route: "/notes"
            }
          ]}
        />
        
        <Link to="/join/">GET INVOLVED</Link>
        <Link to="/contact/">CONTACT</Link>
        <Link to="/support/" className={styles.highlightLink}>SUPPORT US</Link>
      </div>
    </nav>
  )
}
