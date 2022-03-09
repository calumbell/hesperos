import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from '../styles/modules/TitleBanner.module.scss';

export default function TitleAndBanner({title, image, subtitle}) {
  return (
  <div className='mb-4 w-100 position-rel'>
    <GatsbyImage 
      className={`w-100 ${styles.bannerImage} `}
      image={image.gatsbyImageData}
      alt={image.alt}
    />
    <h1 
      className={`position-ab px-5 py-4 bg-light-opaque 
        ${(title.length <= 12) && `fs-700`}
        ${(20 >= title.length && title.length > 12) && `fs-600`}
        ${(title.length > 20) && `fs-500`}
        ${styles.bannerText} 
      `}
    >
      {title}
      {subtitle && 
        <subtitle className={`d-block fw-light fs-400 ${styles.bannerSubtitle}`}>
          {subtitle}
        </subtitle>
      }
    </h1>
    
  </div>
  );
}