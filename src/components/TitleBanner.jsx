import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/modules/TitleBanner.module.scss';

export default function TitleAndBanner({title, image, subtitle}) {
  return (
  <div className={styles.bannerContainer}>
    <GatsbyImage 
      className={styles.bannerImage}
      image={image.gatsbyImageData}
      alt={image.alt}
    />
    <h1 
      className={`
        ${styles.bannerText} 
        ${title.length < 10 && `h1-lg`} 
        ${title.length > 20 && `h1-sm`}
        ${title.length > 30 && `h1-xs`}

      `}
    >
      {title}
      {subtitle && <subtitle className={styles.bannerSubtitle}>{subtitle}</subtitle>}
    </h1>
    
  </div>
  );
}