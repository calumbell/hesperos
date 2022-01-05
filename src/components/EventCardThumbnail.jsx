import React from 'react';
import { Image, Link } from 'gatsby';
import * as styles from './EventCardThumbnail.module.scss';

export default function EventCardThumbnail({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={styles.card}>
      <img
        className={styles.cardImage} 
        src={data.img}
        alt={data.imgAltText}
      />
    </Link>
  )
}
