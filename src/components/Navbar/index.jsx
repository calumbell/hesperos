import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { MenuExpandButton, DropDownLink, Logo } from '../';

import * as styles from './Navbar.module.scss';

const Navbar = ({routes}) => {
  // determines whether the pop-up menu is expanded or hidden
  const [isMenuExpanded, setMenuExpansion] = useState(false);

  // Logic for condional rendering based of browser window
  // A reference is used to access state within event listener
  const [width, _setWidth] = useState(1000);  
  const widthRef = useRef(width);
  const setWidth = data => {
    widthRef.current = data;
    _setWidth(data);
  }

  const breakpoint = 767; 

  useEffect(() => {
    // set initial width
    setWidth(window.innerWidth);

    // attach event listener for updating state
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      if (widthRef.current > breakpoint) setMenuExpansion(false);
    }
    window.addEventListener("resize", handleWindowResize);

    // clean-up
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  
  return (
    <nav className={`d-flex mb-1`}>
      <div className={`d-flex ${styles.navbarLeftSide}`}>
        <Link to="/" onClick={() => setMenuExpansion(false)}>
          <Logo size="6rem"/>
        </Link>
      </div>
      
      <MenuExpandButton 
        isExpanded={isMenuExpanded}
        setExpanded={setMenuExpansion}
      />

      <div 
        className={`d-flex ${styles.navbarRightSide} ${isMenuExpanded && `${styles.popupMenu} highlight-border`}`}       
        onClick={() => setMenuExpansion(false)} // close hamburg. clicks/presses Esc/Enter while focused
        onKeyDown={(e) => { if (['Escape', 'Enter'].includes(e.key)) setMenuExpansion(false)}}
        aria-hidden='true'
      >
      {routes.map((route, i) => {
        // if route has no child routes, render it as a Link
        if (!route['children'])
          return (
            <Link 
              key={i} to={route.url}
              className={(width > breakpoint && route['style'] ) || `nav-link`} 
            > {route.name} </Link>
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

export default Navbar;