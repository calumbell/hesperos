import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/modules/Card.module.scss';

export default function EventCard({ data }) {
  return (
    <Link to={`/${data.subroute}/${data.uid}`} className={styles.card}>
      <GatsbyImage 
        className={styles.cardImage}
        image={data.image}
        alt={data.altText}
      />
      <time>{data.date}</time>
      <h2 className={styles.cardTitle}>{data.title}</h2>
      {data.displayDateBubble &&
        <div className={styles.dateBubble}>
          <p className={styles.bubbleTextLg}>{data.date.split(" ")[1]}</p>
          <p className={styles.bubbleTextSm}>{data.date.split(" ")[2].slice(0,3)}</p>
        </div>
      }
      <sub>{data.subtitle}</sub>
    </Link>
  )
}
