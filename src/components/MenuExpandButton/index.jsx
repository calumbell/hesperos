import React from 'react';
import { motion } from 'framer-motion';

const MenuExpandButton = ({
  isExpanded,
  setExpanded,
}) => {

  const variants = {
    topLine: {
      open: { y1: 55 },
      closed: { y1: 25 },
    },
    middleLine: {
      open: { opacity: 0, },
      closed: { opacity: 1, },
    },
    bottomLine: {
      open: { y1: 25 },
      closed: { y1: 55 },
    },
  }

  return (
    <button 
      className="flex md:hidden items-center size-12"
      onClick={() => {setExpanded(!isExpanded)}}
    >
      <motion.svg
        className="fill-light stroke-primary size-10"
        whileHover={{ scale: 1.05  }}
        whileTap={{ scale: 0.98 }}
        viewBox="0 0 80 80"
        strokeWidth="4"
        style={{transformOrigin : 1}}
      >
        <circle 
          cx="40"
          cy="40"
          r="35"
        />
        <motion.line
          x1="20" y1="25"
          x2="60" y2="25"
          variants={variants.topLine}
          inital="closed"
          animate={isExpanded ? "open" : "closed"}
        />
        <motion.line 
          x1="20" y1="40" 
          x2="60" y2="40" 
          variants={variants.middleLine}
          initial="closed"
          animate={isExpanded ? "open" : "closed"}
        />
        <motion.line 
          x1="20" y1="55" 
          x2="60" y2="55" 
          variants={variants.bottomLine}
          initial="closed"
          animate={isExpanded ? "open" : "closed"}
        />
      </motion.svg>
    </button>
  )
}

export default MenuExpandButton;