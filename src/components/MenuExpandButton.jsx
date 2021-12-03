import React from 'react';
import * as styles from './MenuExpandButton.module.scss';

export default function MenuExpandButton({
  isExpanded, setExpanded
}) {
  return (
    <button 
      className={styles.menuExpandBtn}
      onClick={() => {setExpanded(!isExpanded)}}
    >
      <svg viewBox="0 0 100 60" width="1.5rem" height="1.5rem">
        <rect width="100" height="12"/>
        <rect y="30" width="100" height="12" />
        <rect y="60" width="100" height="12" />
      </svg>
    </button>
  )
}
