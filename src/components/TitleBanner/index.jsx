import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './TitleBanner.module.scss';

const TitleAndBanner = ({title, image, subtitle}) => {
  return (
  <div className={`w-100 position-rel bg-primary ${styles.bannerContainer}`}>
    { image &&
      <GatsbyImage 
        className={`w-100 ${styles.bannerImage} `}
        image={image.gatsbyImageData}
        alt={image.alt || ""}
      />
    }
    <h1 
      className={`bg-light-opaque box-shadow
        ${(title.length <= 12) && `fs-700`}
        ${(20 >= title.length && title.length > 12) && `fs-600`}
        ${(title.length > 20) && `fs-500`}
        ${styles.bannerText} 
      `}
    >
      {title}
      {subtitle && 
        <sub className={`d-block fw-bold fs-400 text-faded ${styles.bannerSubtitle}`}>
          {subtitle}
        </sub>
      }
    </h1>
    
  </div>
  );
}

export default TitleAndBanner;