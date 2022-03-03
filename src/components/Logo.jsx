import React from 'react'
import * as styles from '../styles/modules/Logo.module.scss';

import { viewbox, path } from '../images/hesperosLogoSvgData';
const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      width="10rem" 
      height="5rem"
      viewBox={`${viewbox}`}
    >
      <path 
        id="Selection"
        fill="#5085A5" 
        stroke="black" 
        strokeWidth="1"
        d= {path} 
      />
    </svg>
  )
}

export default Logo
