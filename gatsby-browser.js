import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './src/styles/output.css';

export const wrapPageElement = ({ element }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {element}
    </AnimatePresence>
  )
} 