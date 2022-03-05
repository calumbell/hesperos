import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/modules/Card.module.scss';

export default function EventCard({ data }) {
  return (
    <Link 
      to={`/${data.subroute}/${data.uid}`} 
      className={`${styles.card} p-3 m-1`}
    >
      <GatsbyImage 
        className={`${styles.cardImage}`}
        image={data.image}
        alt={data.altText}
      />

      <time className='mt-2'>{data.date}</time>
      <h2 className={`mt-1 ${styles.cardTitle}`}>{data.title}</h2>
      <sub>{data.subtitle}</sub>
      {data.displayDateBubble &&
        <div className={`p-2 ${styles.dateBubble}`}>
          <p className={`p-0 m-0 ${styles.bubbleTextLg}`}>{data.date.split(" ")[1]}</p>
          <p className={`mt-3 ${styles.bubbleTextSm}`}>{data.date.split(" ")[2].slice(0,3)}</p>
        </div>
      }
    </Link>
  )
}
