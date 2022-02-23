import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/modules/DropDownLink.module.scss';

export default function DropDownLink({
  dropDownName,
  defaultRoute,
  links
}) {
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


  if (width > breakpoint) return (
      <div className={styles.dropDownContainer}>
        <Link to={defaultRoute}>{dropDownName}</Link>
        { links &&
          <ul className={styles.dropDownContent}>
            { links.map((link, i) => {
              return <li key={i}><Link to={link.route}>{link.displayName}</Link></li>
            })}
          </ul>
        }
      </div>
    )
  else return (
    links.map((link, i) => {
      return <Link key={i} to={link.route}>
        {link.expandedName
          ? link.expandedName
          : link.displayName
        }
      </Link>
    })
  )
}
