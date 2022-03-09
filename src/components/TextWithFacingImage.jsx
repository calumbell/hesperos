import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/modules/TextWithFacingImage.module.scss';

export default function TextWithFacingImage({data}) {

  // logic for aligning elements left and right
  const bodyOnLeft = !(data.format === 'Main text right')
  const headingOnLeft = !(data.isHeadingAboveText ^ bodyOnLeft);

  return (
    <div className={`mb-4 d-grid my-4
      ${data.format === 'Full width text' ? `${styles.containerOneCol}` : `${styles.containerTwoCol}`}`
    }>
      <h2 className={`fs-800 text-faded letter-spacing-2
        ${headingOnLeft ? styles.left : styles.right}`}
      > {data.title} </h2>

      <p className={bodyOnLeft ? `${styles.left}` : `${styles.right}`}>{data.bodyText}</p>
      {data.image.gatsbyImageData &&
        <GatsbyImage 
          data={data.image.gatsbyImageData}
          alt={data.image.alt}
        />
      }
    </div>
  );
}
