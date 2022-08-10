import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './SlideShow.module.scss';

const SlideShow = ({images}) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  // 
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, images.length])
  
  return(
    <div className={styles.container}>
      <AnimatePresence>
        {images.map((image, i) => { 
          if(currentIndex === i) return(
            <motion.div
              className={styles.slideShow}
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{type: 'spring', duration: 2 }}               
            >
              <GatsbyImage
                className={styles.slideShowImage}
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