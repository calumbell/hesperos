import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './Card.module.scss';

const Card = ({ data }) => {
  return (
    <Link 
      to={`/${data.subroute}/${data.uid}`} 
      className={`${styles.card} p-0 hover-shadow border-faded`}
    >
      <GatsbyImage 
        className={`${styles.cardImage} mb-2 block`}
        image={data.image}
        alt={data.altText ?? ''}
      />
      <div className='mx-3 mt-1 mb-3'>
        <time className='mb-0 font-extralight'>{data.date}</time>

        <h2 className={`font-serif
          ${data.title.length >= 20 && 'text-xl'}`} // resize long txt
        >
          {data.title}
        </h2>

        { data.subtitle &&
          <sub className={`text-faded font-light font-sans letter-spacing-3 
            ${data.subtitle.length <= 25 ? `text-sm` : `text-xs`}`}
          > {data.subtitle}</sub>
        }
      </div>

      {data.displayDateBubble &&
        <div 
          className={`p-2 bg-light text-center ${styles.dateBubble}`}
          style={{'--gap': '0rem'}}
        >
          <p className='p-0 mt-1 text-3xl'>{data.date.split(" ")[1]}</p>
          <p className='p-0 m-0 2xl'>{data.date.split(" ")[2].slice(0,3)}</p>
        </div>
      }

    </Link>
  )
}

export default Card;
