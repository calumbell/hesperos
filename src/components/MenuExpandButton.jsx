import React from 'react';
import { motion } from 'framer-motion';

import * as styles from '../styles/modules/MenuExpandButton.module.scss';

export default function MenuExpandButton({
  isExpanded, setExpanded
}) {

  const variants = {
    topLine: {
      open: { y1: 41 },
      closed: { y1: 4 },
    },
    middleLine: {
      open: { opacity: 0, },
      closed: { opacity: 1, },
    },
    bottomLine: {
      open: { y1: 4 },
      closed: { y1: 41 },
    },
  }

  return (
    <button 
      className={styles.menuExpandBtn}
      onClick={() => {setExpanded(!isExpanded)}}
    >
      <motion.svg 
        whileHover={{ scale: 1.1  }}
        viewBox="0 0 50 43" 
        width="35"
        height="25"  
        stroke="black"
        strokeWidth="3"
      >
        <motion.line
          x1="0" y1="4"
          x2="50" y2="4"
          variants={variants.topLine}
          inital="closed"
          animate={isExpanded ? "open" : "closed"}
        />
        <motion.line 
          x1="0" y1="23" 
          x2="50" y2="23" 
          variants={variants.middleLine}
          initial="closed"
          animate={isExpanded ? "open" : "closed"}
        />
        <motion.line 
          x1="0" y1="41" 
          x2="50" y2="41" 

          variants={variants.bottomLine}
          initial="closed"
          animate={isExpanded ? "open" : "closed"}
        />
      </motion.svg>
    </button>
  )
}