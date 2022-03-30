import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './EventCardThumbnail.module.scss';

const EventCardThumbnail = ({ data }) => {
  return (
    <Link to={`/events/${data.uid}`} className={`position-rel m-1 ${styles.card}`}>
      <GatsbyImage
        className={`${styles.cardImage}`} 
        image={data.img}
        alt={data.imgAltText || ''}
      />
      <div className={`position-ab bg-light p-2 text-center ${styles.tooltip}`}>
          <p className='m-2 ff-serif fs-300 fw-med'>{data.title}</p>
          <p className='m-2 fs-200 fw-med text-faded'>{data.subtitle}</p>
          <p className='m-2 fs-200'>{data.date}</p>
      </div>
    </Link>
  )
}

export default EventCardThumbnail;