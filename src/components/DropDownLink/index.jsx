import React from 'react';
import { Link } from 'gatsby';
import * as styles from './DropDownLink.module.scss';

const DropDownLink = ({
  menuTitle,
  defaultURL,
  links,
  disableDropdown,
}) => {

  if (disableDropdown) return (
      <div className={styles.dropDownContainer}>
        <Link to={defaultURL} className="nav-item"> 
          {menuTitle}
        </Link>

        { links &&
          <ul className={`${styles.dropDownContent} highlight-border bg-light`}>
            { links.map((link, i) => {
              return <li key={i}>
                <Link 
                  className="nav-link" 
                  to={link.url}
                >
                  {link.name}
                </Link>
              </li>
            })}
          </ul>
        }
      </div>
    )

  return (
    links.map((link, i) => {
      return <Link key={i}
        className={`nav-link`}        
        to={link.url}
      >
        {link.longName ? link.longName : link.name }
      </Link>
    })
  )
}

export default DropDownLink;
