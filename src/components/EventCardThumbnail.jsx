import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/modules/EventCardThumbnail.module.scss';

export default function EventCardThumbnail({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={styles.card}>
      <GatsbyImage
        className={styles.cardImage} 
        image={data.img}
        alt={data.imgAltText}
      />
      <div className={styles.tooltip}>
          <p className={styles.tooltipTitle}>{data.title}</p>
          <p className={styles.tooltipItem}>{data.date}</p>
          <p className={styles.tooltipItem}>{data.subtitle}</p>
      </div>
    </Link>
  )
}
