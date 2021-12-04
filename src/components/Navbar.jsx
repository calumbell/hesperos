import { Link } from 'gatsby';
import React, { useState } from 'react';
import MenuExpandButton from './MenuExpandButton';
import * as styles from './Navbar.module.scss';

export default function Navbar({ siteBrand }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeftSide}>
        <Link to="/">
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
        className={`${styles.navbarRightSide}
          ${ isExpanded && styles.popupMenu}
        `}
      >
        <Link to="/about/">ABOUT</Link>
        <Link to="/events/">EVENTS</Link>
        <Link to="/news/">NEWS</Link>
        <Link to="/support/">SUPPORT US</Link>
        <Link to="/join/">GET INVOLVED</Link>
        <Link to="/contact/">CONTACT</Link>
      </div>
    </nav>
  )
}
