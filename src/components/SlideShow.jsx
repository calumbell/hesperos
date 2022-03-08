import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from '../styles/modules/SlideShow.module.scss';

export default function SlideShow({images}) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length)
    }, 5000);
    return () => clearInterval(timer); // clean-up
  }, [currentImage])
  
  return(
    <AnimatePresence className={`d-flex w-100 ${styles.slideShowContainer}`}>
      { images.map((image, i) => 
        { if(currentImage === i) {
            return(
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 2,
                }}
                
              >
                <GatsbyImage
                  className={`position-ab ${styles.slideShowImage}`}
                  image={image.image.gatsbyImageData}
                />
              </motion.div>
            )
          } else return null;
        }
      )}
    </AnimatePresence>
  )
}