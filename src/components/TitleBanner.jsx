import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const TitleAndBanner = ({ title, image }) => {
  return (
  <section className="w-100 relative justify-center font-medium sm:justify-start items-center flex align-middle bg-primary h-24 md:h-32 -z-20 mb-6">
    <h1 className="z-10 mx-4 rounded h-min py-4 px-6 bg-light/95 text-3xl md:text-5xl tracking-wider">
      {title}
    </h1>
    { image &&
      // wrapper to stop Gatsby changing image pos. absolute => relative
      <div className="absolute -z-10 w-full h-[inherit]">
        <GatsbyImage 
          className="w-[inherit] h-[inherit] rounded"
          image={image.gatsbyImageData}
          alt={image.alt || ""}
        />
      </div>
    }
  </section>
  );
}

export default TitleAndBanner;