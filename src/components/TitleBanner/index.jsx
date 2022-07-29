import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './TitleBanner.module.scss';

const TitleAndBanner = ({ title, image }) => {
  return (
  <h1 className={styles.bannerContainer}>
    { image &&
      <GatsbyImage 
        className={styles.bannerImage}
        image={image.gatsbyImageData}
        alt={image.alt || ""}
      />
    }
    <p 
      className={`${styles.bannerText} 
        ${(title.length <= 12) && `fs-700`}
        ${(20 >= title.length && title.length > 12) && `fs-600`}
        ${(title.length > 20) && `fs-500`}
        
      `}
    >
      {title}
    </p>
    
  </h1>
  );
}

export default TitleAndBanner;