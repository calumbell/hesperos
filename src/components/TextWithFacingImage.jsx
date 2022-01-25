import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './TextWithFacingImage.module.scss';

export default function TextWithFacingImage({data}) {

  // logic for aligning elements left and right
  const bodyOnLeft = !(data.format === 'Main text right')
  const headingOnLeft = !(data.isHeadingAboveText ^ bodyOnLeft);

  console.log(data.isHeadingAboveText)
  return (
    <div className={data.format === 'Full width text' ? `${styles.containerOneCol}` : `${styles.containerTwoCol}`}>
      <h2 className={headingOnLeft ? `${styles.left}` : `${styles.right}`}>{data.title}</h2>
      <p className={bodyOnLeft ? `${styles.left}` : `${styles.right}`}>{data.bodyText}</p>
      {data.image &&
        <GatsbyImage 
          data={data.image.gatsbyImageData}
          alt={data.image.alt}
        />
      }
    </div>
  );
}
