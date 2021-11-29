import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Hesperos Logo Goes here</Link>
      <Link to="/about/">ABOUT</Link>
      <Link to="/events/">EVENTS</Link>
      <Link to="/news/">NEWS</Link>
      <Link to="/support/">SUPPORT US</Link>
      <Link to="/join/">GET INVOLVED</Link>
      <Link to="/contact/">CONTACT</Link>
    </nav>
  )
}
