import React from 'react';
import { Link } from 'gatsby';
import * as styles from './DropDownLink.module.scss';

export default function DropDownLink({
  dropDownName,
  defaultRoute,
  links
}) {
  return (
      <div className={styles.dropDownContainer}>
        <Link to={defaultRoute}>{dropDownName}</Link>
        { links &&
          <ul className={styles.dropDownContent}>
            { links.map(link => {
              return <li><Link to={link.route}>{link.displayName}</Link></li>
            })}
          </ul>
        }
      </div>
  )
}
