import React from 'react';
import './Layout.scss';

import Navbar from './Navbar.jsx';

export default function Layout({ children }) {
  return (
    <div id="page-container">
      <Navbar id="navigation" />

      <main id="content-wrapper">
        {children}
      </main>
    </div>
  )
}
