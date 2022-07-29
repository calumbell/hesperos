import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './EventCardThumbnail.module.scss';

const EventCardThumbnail = ({ data }) => {
  return (
    <Link 
      to={`/events/${data.uid}`} 
      className={`position-rel  ${styles.card}`}
    >
      <GatsbyImage
        className={`${styles.cardImage}`} 
        image={data.img}
        alt={data.imgAltText || ''}
      />
      <div className={`bg-light p-2 text-center ${styles.tooltip}`}>
          <p className='ff-serif fs-300 fw-med'>{data.title}</p>
          {/* <p className='fs-300 fw-med text-faded'>{data.subtitle}</p> */}
          <p className={styles.subtitle}>{data.subtitle}</p>
          <p className='fs-300'>{data.date}</p>
      </div>
    </Link>
  )
}

export default EventCardThumbnail;