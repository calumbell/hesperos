import React from 'react';
import * as styles from './TextSectionTwoColumn.module.scss';

const TextSectionTwoColumn = ({data}) => {

  return (
    <div className={styles.container}>
      <h2 className='title'>
        {data.title}
      </h2>
      <p className={styles.bodyText}>
        {data.bodyText}
      </p>
    </div>
  )
}

export default TextSectionTwoColumn;