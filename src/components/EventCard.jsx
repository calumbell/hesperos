import { Link } from 'gatsby';
import React from 'react';
import * as styles from './EventCard.module.scss';

export default function EventCard({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={styles.eventCard}>
      <img 
        className={styles.cardImage}
        src={data.img}
        alt={data.imgAltText}
      />
      <time>{data.date}</time>
      <sub className={styles.cardTitle}>{data.title}</sub>

    </Link>
  )
}
