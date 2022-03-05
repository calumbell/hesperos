import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/modules/EventCardThumbnail.module.scss';

export default function EventCardThumbnail({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={`m-1 ${styles.card}`}>
      <GatsbyImage
        className={`${styles.cardImage}`} 
        image={data.img}
        alt={data.imgAltText}
      />
      <div className={`bg-light p-2 ${styles.tooltip}`}>
          <p className={`m-2 ${styles.tooltipTitle}`}>{data.title}</p>
          <p className={`m-2 ${styles.tooltipItem}`}>{data.date}</p>
          <p className={`m-2 ${styles.tooltipItem}`}>{data.subtitle}</p>
      </div>
    </Link>
  )
}
