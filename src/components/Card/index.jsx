import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './Card.module.scss';

const Card = ({ data }) => {
  return (
    <Link 
      to={`/${data.subroute}/${data.uid}`} 
      className={`${styles.card} p-4 m-1 hover-shadow highlight-border`}
    >
      <GatsbyImage 
        className={`${styles.cardImage} mb-2 d-block`}
        image={data.image}
        alt={data.altText}
      />

      <time className='mt-2 mb-0 fw-xl'>{data.date}</time>

      <h2 className={`m-0 p-0 fw-med
        ${data.title.length <= 20 ? `fs-500` : `fs-400` /* resize longer text */}`}
      >{data.title}</h2>

      { data.subtitle &&
        <sub className={`text-faded ff-sans letter-spacing-3  fs-200`}> 
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

export default Card;
