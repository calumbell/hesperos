import React from 'react'
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
        stroke-width="1"
        d= {path} 
      />
    </svg>
  )
}

export default Logo
