import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './TitleBanner.module.scss';

const TitleAndBanner = ({ title, image }) => {
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
    <p className={`${styles.bannerText} font-bold text-4xl`}>
      {title}
    </p>
    
  </h1>
  );
}

export default TitleAndBanner;