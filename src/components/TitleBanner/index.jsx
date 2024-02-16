import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './TitleBanner.module.scss';

const TitleAndBanner = ({ title, image }) => {

  // Resize fonts for relative to title length
  const titleFontSize = (() => {
    if (title.length > 20) return 'fs-500'
    if (title.length > 12) return 'fs-600'
    return 'fs-700'
  });

  return (
  <h1 className={styles.bannerContainer}>
    { image &&
      // wrapper to stop Gatsby changing image pos. absolute => relative
      <div className={styles.bannerImageWrapper}>
        <GatsbyImage 
          className={styles.bannerImage}
          image={image.gatsbyImageData}
          alt={image.alt || ""}
        />
      </div>
    }
    <span 
      className={`${styles.bannerText} ${titleFontSize}`}
    >
      {title}
    </span>
    
  </h1>
  );
}

export default TitleAndBanner;