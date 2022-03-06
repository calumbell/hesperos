import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/modules/TitleBanner.module.scss';

export default function TitleAndBanner({title, image, subtitle}) {
  return (
  <div className={`mb-4 ${styles.bannerContainer}`}>
    <GatsbyImage 
      className={styles.bannerImage}
      image={image.gatsbyImageData}
      alt={image.alt}
    />
    <h1 
      className={`
        px-5 py-4 bg-light-opaque
        ${(title.length <= 10) && `fs-700`}
        ${(20 >= title.length && title.length > 10) && `fs-600`}
        ${(title.length > 20) && `fs-500`}
        ${styles.bannerText} 
      `}
    >
      {title}
      {subtitle && <subtitle className={styles.bannerSubtitle}>{subtitle}</subtitle>}
    </h1>
    
  </div>
  );
}