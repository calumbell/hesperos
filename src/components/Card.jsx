import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/modules/Card.module.scss';

export default function EventCard({ data }) {
  return (
    <Link 
      to={`/${data.subroute}/${data.uid}`} 
      className='position-rel p-3 m-1 hover-shadow'
    >
      <GatsbyImage 
        className={`${styles.cardImage} d-block`}
        image={data.image}
        alt={data.altText}
      />

      <time className='mt-2 fw-xl'>{data.date}</time>

      <h2 className={`mt-1 fw-reg 
        ${data.title.length <= 15 ? `fs-600` : `fs-500` /* resize longer text */}`}
      >{data.title}</h2>

      { data.subtitle &&
        <sub className={`text-faded ff-sans letter-spacing-3 fs-200`}> 
          {data.subtitle}
        </sub>
      }

      {data.displayDateBubble &&
        <div 
          className={`position-ab d-flex p-2 bg-light text-center ${styles.dateBubble}`}
          style={{'--gap': '0rem'}}
        >
          <p className='p-0 mt-1 fs-500'>{data.date.split(" ")[1]}</p>
          <p className='p-0 m-0 fs-200'>{data.date.split(" ")[2].slice(0,3)}</p>
        </div>
      }

    </Link>
  )
}
