import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ data }) => {
  return (
    <li className="border-primary-pale shadow border relative overflow-hidden h-[24rem] md:h-[36rem] hover:opacity-90 transition-all">
      <Link 
        to={`/${data.subroute}/${data.uid}`} 
        className="p-0 h-[36rem]"
      >
        <GatsbyImage 
          className=" mb-2 block h-[60%] md:h-[70%]"
          image={data.image}
          alt={data.altText ?? ''}
        />
        <div className='mx-3 flex flex-col justify-between'>
          <time className='mb-0 font-extralight'>{data.date}</time>

          <h2 className={`font-serif m-0
            ${data.title.length < 20 ? 'text-3xl' : 'text-2xl'}`// resize long txt
          }>
            {data.title}
          </h2>

          { data.subtitle &&
            <sub className={`text-faded font-light text-primary font-sans letter-spacing-3 
              ${data.subtitle.length < 25 ? `text-lg` : `text-sm`}
            `}>
              {data.subtitle}
            </sub>
          }
        </div>

        {data.displayDateBubble &&
          <div 
            className="absolute flex flex-col top-8 left-3 items-center rounded-full p-2 size-20 bg-light/70 text-center"
          >
            <p className='p-0 mt-1 text-3xl'>{data.date.split(" ")[1]}</p>
            <p className='p-0 m-0 2xl'>{data.date.split(" ")[2].slice(0,3)}</p>
          </div>
        }

      </Link>
    </li>
  )
}

export default Card;
