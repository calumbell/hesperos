import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './MenuExpandButton.module.scss';

const MenuExpandButton = ({
  isExpanded, setExpanded
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
      className={`mt-3 mb-0 p-0 ${styles.menuExpandBtn}`}
      onClick={() => {setExpanded(!isExpanded)}}
    >
      <motion.svg 
        whileHover={{ scale: 1.1  }}
        whileTap={{ scale: 0.95 }}
        viewBox="0 0 80 80" 
        width="50"
        height="50"  
        strokeWidth="4"
        style={{transformOrigin : 0.5}}
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