import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AnimatePresence, motion } from 'framer-motion';

const SlideShow = ({images}) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, images.length])
  
  return(
    <div className="hidden md:block relative w-100 h-[68vh]">
      <AnimatePresence>
        {images.map((image, i) => { 
          if(currentIndex === i) return(
            <motion.div
              className="absolute"
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{type: 'spring', duration: 2 }}               
            >
              <GatsbyImage
                className="h-[68vh]"
                image={image.image.gatsbyImageData}
                alt={image.image.alt ?? ''}
                loading="lazy"
              />
            </motion.div>
          )
          return undefined;
        }
        )}
      </AnimatePresence>
    </div>
  )
}

export default SlideShow;