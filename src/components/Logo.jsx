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
      className={` ${styles.logo}`}

    >
      
      <path 
        id="Selection"
        fill="#5085A5" 
        d={path} 
      />
    </svg>
  )
}

export default Logo
