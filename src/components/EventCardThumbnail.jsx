import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/modules/EventCardThumbnail.module.scss';

export default function EventCardThumbnail({ data }) {
  return (
    <Link to={`/events/${data.uid}`} className={`position-rel m-1 ${styles.card}`}>
      <GatsbyImage
        className={`${styles.cardImage}`} 
        image={data.img}
        alt={data.imgAltText}
      />
      <div className={`position-ab bg-light p-2 text-center ${styles.tooltip}`}>
          <p className='m-2 ff-serif fs-400 fw-med'>{data.title}</p>
          <p className='m-2 fs-300 fw-med text-faded'>{data.subtitle}</p>
          <p className='m-2'>{data.date}</p>
      </div>
    </Link>
  )
}
