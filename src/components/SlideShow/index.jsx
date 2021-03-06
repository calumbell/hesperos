import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from './SlideShow.module.scss';

const SlideShow = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length)
    }, 5000);
    return () => clearInterval(timer); // clean-up
  }, [currentImage, images.length])
  
  return(
    <div className={styles.container}>
      <AnimatePresence>
        {images.map((image, i) => { 
          if(currentImage === i) return(
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
                loading="eager"
              />
            </motion.div>
          )}
        )}
      </AnimatePresence>
    </div>
  )
}

export default SlideShow;