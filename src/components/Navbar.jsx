import React, { useState } from 'react';
import { Link } from 'gatsby';

import MenuExpandButton from './MenuExpandButton';
import DropDownLink from './DropDownLink';
import * as styles from './Navbar.module.scss';

export default function Navbar({ siteBrand }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav 
      className={styles.navbar}
    >
      <div className={styles.navbarLeftSide}>
        <Link 
          to="/"
          onClick={() => setExpanded(false)}
        >
          <img 
            className={styles.siteBrand}
            src={siteBrand.url}
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
  
        <Link to="/news/">NEWS</Link>
        <Link to="/support/">SUPPORT US</Link>
        <Link to="/join/">GET INVOLVED</Link>
        <Link to="/contact/">CONTACT</Link>
      </div>
    </nav>
  )
}
