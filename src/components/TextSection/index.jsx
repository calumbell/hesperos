import React from 'react';
import * as styles from './TextSection.module.scss';
const TextSection = ({
  title,
  children,
}) => {
  const sectionStyle = `${styles.container} rich-text`

  return(
    <section className={sectionStyle}>
      {title && <h2 className={styles.sectionTitle}>
        {title}
      </h2>}
      {children}
    </section>
  )
}

export default TextSection;

