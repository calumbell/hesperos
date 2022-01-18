import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './EventCard.module.scss';

export default function EventCard({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={styles.eventCard}>
      <GatsbyImage 
        className={styles.cardImage}
        image={data.img}
        alt={data.imgAltText}
      />
      <time>{data.date}</time>
      <sub className={styles.cardTitle}>{data.title}</sub>
      <div className={styles.dateBubble}>
        <p className={styles.bubbleTextLg}>{data.date.split(" ")[1]}</p>
        <p className={styles.bubbleTextSm}>{data.date.split(" ")[2].slice(0,3)}</p>
      </div>
    </Link>
  )
}
