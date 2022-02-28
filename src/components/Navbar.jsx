import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MenuExpandButton, DropDownLink, Logo } from './';

import * as styles from '../styles/modules/Navbar.module.scss';

export default function Navbar() {
  // determines whether the pop-up menu is expanded or hidden
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftSide}>
        <Link to="/" onClick={() => setExpanded(false)}>
          <Logo size="6rem"/>
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
        <Link to="/support/" className="call-to-action">SUPPORT US</Link>
      </div>
    </nav>
  )
}
