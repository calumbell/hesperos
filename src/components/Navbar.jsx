import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { MenuExpandButton, DropDownLink, Logo } from './';

import * as styles from '../styles/modules/Navbar.module.scss';

export default function Navbar({routes}) {
  // determines whether the pop-up menu is expanded or hidden
  const [isMenuExpanded, setMenuExpansion] = useState(false);

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
        <Link to="/" onClick={() => setMenuExpansion(false)}>
          <Logo size="6rem"/>
        </Link>
      </div>
      
      <MenuExpandButton 
        isExpanded={isMenuExpanded}
        setExpanded={setMenuExpansion}
      />

      <div 
        className={`${styles.navbarRightSide} ${isMenuExpanded && styles.popupMenu}`}       
        onClick={() => setMenuExpansion(false)} // close hamburg. clicks/presses Esc/Enter while focused
        onKeyDown={(e) => { if (['Escape', 'Enter'].includes(e.key)) setMenuExpansion(false)}}
        aria-hidden='true'
      >
      {routes.map((route, i) => {
        // if route has no child routes, render it as a Link
        if (!route['children'])
          return (
            <Link 
              key={i}
              className={(width > breakpoint && route['style'] ) || `nav-link`}
              to={route.url}> 
                {route.name}
            </Link>
          )
        
        // if route has child routes, render  as a drop down
        return (
          <DropDownLink
            key={i}
            menuTitle={route.name}
            defaultURL={route.url}
            links={route.children}
            disableDropdown={breakpoint < width}
          />
        )
      })}
      </div>
    </nav>
  )
}
