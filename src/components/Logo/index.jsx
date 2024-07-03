import React from 'react'
import { viewbox, path } from './hesperosLogoPathData';

const Logo = () => {
  return (
    <svg
      className="overflow-visible w-40 h-20 group transition-all "
      viewBox={`${viewbox}`}
    >
      <path 
        id="Selection"
        className="transition-all duration-200 fill-primary group-hover:fill-primary/60 "
        d={path} 
      />
    </svg>
  )
}

export default Logo
