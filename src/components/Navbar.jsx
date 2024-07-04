import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { 
  MenuExpandButton,
  DropDownLink,
  Logo,
} from '.';

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
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  
  return (
    <nav className="flex w-full">
      <a className={"absolute -left-full focus:left-auto bg-light/90 z-20 top-20 p-6 text-2xl"} href="#main">
        Skip to main content
      </a>
      {/* Left Side*/}
      <div className="flex w-full md:w-auto p-0 justify-between items-center z-10">
        <Link 
          to="/" 
          onClick={() => setMenuExpansion(false)}
        >
          <title className="sr-only">Home Page</title>
          <Logo />
        </Link>

        <MenuExpandButton 
          isExpanded={isMenuExpanded}
          setExpanded={setMenuExpansion}
        />
      </div>
      

      {/* Right Side */}
      <div 
        className={`
          absolute flex bg-light/90 px-6 py-2 flex-col items-center z-10 -right-full top-16 
          md:static md:flex-row md:visible md:w-full md:justify-between md:p-0 md:ml-32 focus-within:right-0
          ${isMenuExpanded ? `right-0 highlight-border` : 'invisible md:visible'}
        `}
        onClick={() => setMenuExpansion(false)} 
        onKeyDown={(e) => { if (['Escape', 'Enter'].includes(e.key)) setMenuExpansion(false)}}
        aria-hidden='true'
      >
      {routes.map((route, i) => {
        // if route has no child routes, render it as a Link
        if (!route['children'])
          return (
            <Link 
              key={i}
              to={route.url}
              className={(width > breakpoint && route['style'] ) || `nav-link`}
              tabIndex="0" 
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