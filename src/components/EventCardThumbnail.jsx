import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const EventCardThumbnail = ({ data }) => {
  return (
    <Link 
      to={`/events/${data.uid}`} 
      className="w-full relative group"
    >
      <GatsbyImage
        className="w-full h-full inline-block overflow-hidden group-hover:opacity-90"
        image={data.img}
        alt={data.imgAltText || ''}
      />
      <div className="p-2 absolute bg-light text-center opacity-0 group-hover:opacity-90 top-4 w-[80%] left-[10%] transition-all">
          <p className='font-serif mb-1'>{data.title}</p>
          <p className="text-primary">{data.subtitle}</p>
          <p>{data.date}</p>
      </div>
    </Link>
  )
}

export default EventCardThumbnail;