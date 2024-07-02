import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './EventCardThumbnail.module.scss';

const EventCardThumbnail = ({ data }) => {
  return (
    <Link 
      to={`/events/${data.uid}`} 
      className={styles.card}
    >
      <GatsbyImage
        className={`${styles.cardImage}`} 
        image={data.img}
        alt={data.imgAltText || ''}
      />
      <div className={`p-2 text-center ${styles.tooltip}`}>
          <p className='font-serif'>{data.title}</p>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <p>{data.date}</p>
      </div>
    </Link>
  )
}

export default EventCardThumbnail;