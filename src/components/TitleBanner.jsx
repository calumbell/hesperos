import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/modules/TitleBanner.module.scss';

export default function TitleAndBanner({title, image}) {
  return (
  <div className={styles.bannerContainer}>
    <GatsbyImage 
      className={styles.bannerImage}
      image={image.gatsbyImageData}
      alt={image.alt}
    />
    <h1 className={styles.bannerText}>{title}</h1>
  </div>
  );
}
