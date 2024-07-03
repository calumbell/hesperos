import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './src/styles/global.css';

export const wrapPageElement = ({ element }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {element}
    </AnimatePresence>
  )
} 