import React from 'react';
import { Link } from 'gatsby';
import * as styles from './EventCardThumbnail.module.scss';

export default function EventCardThumbnail({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={styles.card}>
      <img
        className={styles.cardImage} 
        src={data.img}
        alt={data.imgAltText}
      >
      </img>
      <div className={styles.tooltip}>
          <p className={styles.tooltipTitle}>{data.title}</p>
          <p className={styles.tooltipDate}>{data.date}</p>
      </div>
    </Link>
  )
}
